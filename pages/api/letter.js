import { supabase } from '@/lib/supabase';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { title, studentName, content } = req.body;

  if (!title || !studentName || !content) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const { data, error } = await supabase
    .from('letters')
    .insert({ title, student_name: studentName, content })
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ success: true, id: data.id });
}
