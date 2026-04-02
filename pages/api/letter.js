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
      .select('id, title, student_name, content, created_at')
      .order('created_at', { ascending: false });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === 'POST') {
    const decoded = getUserFromToken(req);

    const { title, studentName, content } = req.body;

    if (!title || !studentName || !content) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const insertData = { title, student_name: studentName, content };

    const { data, error } = await supabase
      .from('letters')
      .insert(insertData)
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: true, id: data.id, letter: data });
  }

  if (req.method === 'PUT') {
    const { id, title, studentName, content } = req.body;
    if (!id) return res.status(400).json({ error: 'ID required' });

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
