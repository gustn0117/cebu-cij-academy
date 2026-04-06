import { supabase } from '@/lib/supabase';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'cij-academy-secret-2024';

function getUserFromToken(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) return null;
  try {
    return jwt.verify(authHeader.split(' ')[1], JWT_SECRET);
  } catch {
    return null;
  }
}

export default async function handler(req, res) {
  // GET: list letters (only shows id, title, student_name, created_at - content is hidden)
  if (req.method === 'GET') {
    const { id, password } = req.query;

    // If id + password provided, return single letter with content
    if (id) {
      const { data, error } = await supabase
        .from('letters')
        .select('id, title, student_name, content, password, created_at, author_id, author_name')
        .eq('id', Number(id))
        .single();

      if (error || !data) return res.status(404).json({ error: 'Letter not found' });

      // Check password (birthdate)
      if (data.password && data.password !== password) {
        return res.status(403).json({ error: 'Incorrect password' });
      }

      // Return content (remove password from response)
      const { password: _, ...letterData } = data;
      return res.status(200).json(letterData);
    }

    // List all letters (without content)
    const { data, error } = await supabase
      .from('letters')
      .select('id, title, student_name, created_at')
      .order('created_at', { ascending: false });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  // POST: create letter (requires login)
  if (req.method === 'POST') {
    const decoded = getUserFromToken(req);
    if (!decoded) return res.status(401).json({ error: 'Login required to write a letter' });

    const { title, studentName, content, password } = req.body;
    if (!title || !studentName || !content || !password) {
      return res.status(400).json({ error: 'All fields including password (birthdate) are required' });
    }

    const insertData = {
      title,
      student_name: studentName,
      content,
      password,
      author_id: decoded.id,
      author_name: decoded.name || decoded.username,
    };

    const { data, error } = await supabase
      .from('letters')
      .insert(insertData)
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ success: true, id: data.id });
  }

  // PUT: edit letter (requires login + ownership)
  if (req.method === 'PUT') {
    const decoded = getUserFromToken(req);
    if (!decoded) return res.status(401).json({ error: 'Login required' });

    const { id, title, studentName, content, password } = req.body;
    if (!id) return res.status(400).json({ error: 'ID required' });

    // Check ownership
    const { data: existing } = await supabase
      .from('letters')
      .select('author_id')
      .eq('id', Number(id))
      .single();

    if (existing && existing.author_id && existing.author_id !== decoded.id) {
      return res.status(403).json({ error: 'You can only edit your own letters' });
    }

    const updates = {};
    if (title !== undefined) updates.title = title;
    if (studentName !== undefined) updates.student_name = studentName;
    if (content !== undefined) updates.content = content;
    if (password !== undefined) updates.password = password;

    const { data, error } = await supabase
      .from('letters')
      .update(updates)
      .eq('id', Number(id))
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
