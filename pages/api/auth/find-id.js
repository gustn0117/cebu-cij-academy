import { supabase } from '@/lib/supabase';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, birthdate, phone } = req.body;

  if (!name || !birthdate || !phone) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const { data: user, error } = await supabase
    .from('users')
    .select('username')
    .eq('name', name)
    .eq('birthdate', birthdate)
    .eq('phone', phone)
    .single();

  if (error || !user) {
    return res.status(404).json({ error: 'No account found with the provided information' });
  }

  return res.status(200).json({ username: user.username });
}
