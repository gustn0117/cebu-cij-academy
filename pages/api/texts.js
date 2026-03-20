import { supabase } from '@/lib/supabase';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { page } = req.query;

  if (!page) {
    return res.status(400).json({ error: 'page parameter is required' });
  }

  const { data, error } = await supabase
    .from('text_overrides')
    .select('*')
    .eq('page', page);

  if (error) return res.status(500).json({ error: error.message });
  return res.status(200).json(data || []);
}
