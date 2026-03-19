import { supabase } from '@/lib/supabase';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('popups')
      .select('*')
      .order('position', { ascending: true });
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === 'POST') {
    const { title, image_url, link_url, is_active, position } = req.body;
    const { data, error } = await supabase
      .from('popups')
      .insert({ title, image_url, link_url: link_url || null, is_active: is_active !== false, position: position || 1 })
      .select()
      .single();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === 'PUT') {
    const { id, title, image_url, link_url, is_active, position } = req.body;
    if (!id) return res.status(400).json({ error: 'ID is required' });
    const updates = {};
    if (title !== undefined) updates.title = title;
    if (image_url !== undefined) updates.image_url = image_url;
    if (link_url !== undefined) updates.link_url = link_url || null;
    if (is_active !== undefined) updates.is_active = is_active;
    if (position !== undefined) updates.position = position;
    const { data, error } = await supabase
      .from('popups')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === 'DELETE') {
    const { id } = req.query;
    if (!id) return res.status(400).json({ error: 'ID is required' });
    const { error } = await supabase.from('popups').delete().eq('id', Number(id));
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
