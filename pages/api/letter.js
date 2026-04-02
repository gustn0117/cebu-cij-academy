import { supabase } from '@/lib/supabase';

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
    const { title, studentName, content, password } = req.body;

    if (!title || !studentName || !content || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const { data, error } = await supabase
      .from('letters')
      .insert({ title, student_name: studentName, content, password })
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ success: true, id: data.id, letter: data });
  }

  if (req.method === 'PUT') {
    const { id, title, studentName, content, password } = req.body;
    if (!id) return res.status(400).json({ error: 'ID required' });
    if (!password) return res.status(400).json({ error: 'Password is required' });

    // Verify password
    const { data: existing } = await supabase
      .from('letters')
      .select('password')
      .eq('id', Number(id))
      .single();

    if (!existing || existing.password !== password) {
      return res.status(403).json({ error: 'Incorrect password' });
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

  if (req.method === 'DELETE') {
    const { id, password } = req.query;
    if (!id) return res.status(400).json({ error: 'ID required' });

    // Verify password
    const { data: existing } = await supabase
      .from('letters')
      .select('password')
      .eq('id', Number(id))
      .single();

    if (!existing || existing.password !== password) {
      return res.status(403).json({ error: 'Incorrect password' });
    }

    const { error } = await supabase
      .from('letters')
      .delete()
      .eq('id', Number(id));

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
