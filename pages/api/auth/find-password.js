import { supabase } from '@/lib/supabase';
import bcrypt from 'bcryptjs';

function generateTempPassword() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username, name, birthdate, phone } = req.body;

  if (!username || !name || !birthdate || !phone) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const { data: user, error } = await supabase
    .from('users')
    .select('id')
    .eq('username', username)
    .eq('name', name)
    .eq('birthdate', birthdate)
    .eq('phone', phone)
    .single();

  if (error || !user) {
    return res.status(404).json({ error: 'No account found with the provided information' });
  }

  const tempPassword = generateTempPassword();
  const hashedPassword = await bcrypt.hash(tempPassword, 10);

  const { error: updateError } = await supabase
    .from('users')
    .update({ password_hash: hashedPassword })
    .eq('id', user.id);

  if (updateError) {
    return res.status(500).json({ error: 'Failed to reset password' });
  }

  return res.status(200).json({ password: tempPassword });
}
