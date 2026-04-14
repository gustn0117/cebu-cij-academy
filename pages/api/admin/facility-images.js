import { supabase } from '@/lib/supabase';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('facility_images')
      .select('*')
      .order('id', { ascending: false });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data || []);
  }

  if (req.method === 'POST') {
    const { section, image_url, title, position } = req.body;

    if (!section || !image_url) {
      return res.status(400).json({ error: 'section and image_url are required' });
    }

    const { data, error } = await supabase
      .from('facility_images')
      .insert({ section, image_url, title: title || '', position: position || 1 })
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === 'PUT') {
    const { id, section, image_url, title, position } = req.body;

    if (!id) return res.status(400).json({ error: 'ID required' });

    const updates = {};
    if (section !== undefined) updates.section = section;
    if (image_url !== undefined) updates.image_url = image_url;
    if (title !== undefined) updates.title = title;
    if (position !== undefined) updates.position = position;

    const { data, error } = await supabase
      .from('facility_images')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === 'DELETE') {
    const { id } = req.query;
    if (!id) return res.status(400).json({ error: 'ID required' });

    const { error } = await supabase
      .from('facility_images')
      .delete()
      .eq('id', Number(id));

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
