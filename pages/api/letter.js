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
  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('letters')
      .select('id, title, student_name, content, created_at, author_name, author_id')
      .order('created_at', { ascending: false });

    if (error) {
      // author columns may not exist yet, fallback
      const { data: fallback, error: e2 } = await supabase
        .from('letters')
        .select('id, title, student_name, content, created_at')
        .order('created_at', { ascending: false });
      if (e2) return res.status(500).json({ error: e2.message });
      return res.status(200).json(fallback);
    }
    return res.status(200).json(data);
  }

  if (req.method === 'POST') {
    const decoded = getUserFromToken(req);
    if (!decoded) return res.status(401).json({ error: 'Login required to write a letter' });

    const { title, studentName, content } = req.body;
    if (!title || !studentName || !content) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const insertData = { title, student_name: studentName, content };
    // Try to store author info if columns exist
    try {
      insertData.author_id = decoded.id;
      insertData.author_name = decoded.name || decoded.username;
    } catch {}

    const { data, error } = await supabase
      .from('letters')
      .insert(insertData)
      .select()
      .single();

    if (error) {
      // If author columns don't exist, retry without them
      delete insertData.author_id;
      delete insertData.author_name;
      const { data: d2, error: e2 } = await supabase
        .from('letters')
        .insert(insertData)
        .select()
        .single();
      if (e2) return res.status(500).json({ error: e2.message });
      return res.status(200).json({ success: true, id: d2.id, letter: d2 });
    }
    return res.status(200).json({ success: true, id: data.id, letter: data });
  }

  if (req.method === 'PUT') {
    const decoded = getUserFromToken(req);
    if (!decoded) return res.status(401).json({ error: 'Login required' });

    const { id, title, studentName, content } = req.body;
    if (!id) return res.status(400).json({ error: 'ID required' });

    // Check ownership via author_id
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

    const { data, error } = await supabase
      .from('letters')
      .update(updates)
      .eq('id', Number(id))
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ success: true, letter: data });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
