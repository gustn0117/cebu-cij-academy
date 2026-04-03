import { supabase } from '@/lib/supabase';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username, password, name, birthdate, phone, email } = req.body;

  if (!username || !password || !name || !birthdate || !phone || !email) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters' });
  }

  if (!/^\d{11}$/.test(phone)) {
    return res.status(400).json({ error: 'Phone number must be 11 digits' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Check email uniqueness
  const { data: existingEmail } = await supabase
    .from('users')
    .select('id')
    .eq('email', email)
    .single();

  if (existingEmail) {
    return res.status(400).json({ error: 'This email is already registered' });
  }

  // Check phone uniqueness
  const { data: existingPhone } = await supabase
    .from('users')
    .select('id')
    .eq('phone', phone)
    .single();

  if (existingPhone) {
    return res.status(400).json({ error: 'This phone number is already registered' });
  }

  // Check username uniqueness
  const { data: existingUsername } = await supabase
    .from('users')
    .select('id')
    .eq('username', username)
    .single();

  if (existingUsername) {
    return res.status(400).json({ error: 'This username is already taken' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const { data, error } = await supabase
    .from('users')
    .insert({
      username,
      password_hash: hashedPassword,
      password_plain: password,
      name,
      birthdate,
      phone,
      email,
    })
    .select('id, username, email, name, birthdate, phone, created_at')
    .single();

  if (error) return res.status(500).json({ error: error.message });
  return res.status(200).json(data);
}
