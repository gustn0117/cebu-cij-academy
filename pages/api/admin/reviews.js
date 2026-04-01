import { supabase } from '@/lib/supabase';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === 'POST') {
    const { name, country, flag, program, duration, rating, text, title, image_url } = req.body;

    if (!name || !text) {
      return res.status(400).json({ error: 'Name and text are required' });
    }

    const insertData = { name, text };
    if (country) insertData.country = country;
    if (flag) insertData.flag = flag;
    if (program) insertData.program = program;
    if (duration) insertData.duration = duration;
    if (rating !== undefined) insertData.rating = rating;
    if (title) insertData.title = title;
    if (image_url) insertData.image_url = image_url;

    const { data, error } = await supabase
      .from('reviews')
      .insert(insertData)
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === 'PUT') {
    const { id, title, text, name, country, flag, program, duration, rating, image_url } = req.body;
    if (!id) return res.status(400).json({ error: 'ID required' });

    const updates = {};
    if (title !== undefined) updates.title = title;
    if (text !== undefined) updates.text = text;
    if (name !== undefined) updates.name = name;
    if (country !== undefined) updates.country = country;
    if (flag !== undefined) updates.flag = flag;
    if (program !== undefined) updates.program = program;
    if (duration !== undefined) updates.duration = duration;
    if (rating !== undefined) updates.rating = Number(rating);
    if (image_url !== undefined) updates.image_url = image_url;

    const { data, error } = await supabase
      .from('reviews')
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
      .from('reviews')
      .delete()
      .in('id', ids);

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
