import { supabase } from '@/lib/supabase';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('hero_slides')
      .select('*')
      .order('position', { ascending: true });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data || []);
  }

  if (req.method === 'POST') {
    const { image_url, position } = req.body;

    if (!image_url) {
      return res.status(400).json({ error: 'image_url is required' });
    }

    const { data, error } = await supabase
      .from('hero_slides')
      .insert({ image_url, position: position || 1 })
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === 'PUT') {
    const { id, image_url, position } = req.body;

    if (!id) return res.status(400).json({ error: 'ID required' });

    const updates = {};
    if (image_url !== undefined) updates.image_url = image_url;
    if (position !== undefined) updates.position = position;

    const { data, error } = await supabase
      .from('hero_slides')
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
      .from('hero_slides')
      .delete()
      .eq('id', Number(id));

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
