import { supabase } from '@/lib/supabase';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { page, lang } = req.query;

    let query = supabase.from('text_overrides').select('*');
    if (page) query = query.eq('page', page);
    if (lang) query = query.eq('lang', lang);
    query = query.order('page').order('key');

    const { data, error } = await query;

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === 'POST') {
    const { page, key, lang, value } = req.body;

    if (!page || !key || !lang) {
      return res.status(400).json({ error: 'page, key, and lang are required' });
    }

    const { data, error } = await supabase
      .from('text_overrides')
      .upsert({ page, key, lang, value }, { onConflict: 'page,key,lang' })
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
