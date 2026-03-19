import { supabase } from '@/lib/supabase';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { data, error } = await supabase
    .from('popups')
    .select('*')
    .eq('is_active', true)
    .order('position', { ascending: true });

  if (error) return res.status(500).json({ error: error.message });
  return res.status(200).json(data);
}
