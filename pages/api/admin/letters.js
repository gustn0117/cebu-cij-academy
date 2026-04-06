import { supabase } from '@/lib/supabase';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('letters')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === 'POST') {
    const { title, student_name, content, password } = req.body;
    if (!title || !student_name || !content) {
      return res.status(400).json({ error: 'Title, student_name, and content are required' });
    }

    const insertData = { title, student_name, content };
    if (password) insertData.password = password;

    const { data, error } = await supabase
      .from('letters')
      .insert(insertData)
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === 'PUT') {
    const { id, title, student_name, content, password } = req.body;
    if (!id) return res.status(400).json({ error: 'ID required' });

    const updates = {};
    if (title !== undefined) updates.title = title;
    if (student_name !== undefined) updates.student_name = student_name;
    if (content !== undefined) updates.content = content;
    if (password !== undefined) updates.password = password;

    const { data, error } = await supabase
      .from('letters')
      .update(updates)
      .eq('id', Number(id))
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === 'DELETE') {
    const { id } = req.query;
    if (!id) return res.status(400).json({ error: 'ID required' });

    const ids = id.split(',').map(Number);
    const { error } = await supabase
      .from('letters')
      .delete()
      .in('id', ids);

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
