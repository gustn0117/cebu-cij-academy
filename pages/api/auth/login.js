import { supabase } from '@/lib/supabase';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'cij-academy-secret-2024';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { identifier, email, password } = req.body;
  const loginId = identifier || email;

  if (!loginId || !password) {
    return res.status(400).json({ error: 'Username/email and password are required' });
  }

  // Try to find user by email first, then by username
  let user = null;

  const { data: byEmail } = await supabase
    .from('users')
    .select('*')
    .eq('email', loginId)
    .single();

  if (byEmail) {
    user = byEmail;
  } else {
    const { data: byUsername } = await supabase
      .from('users')
      .select('*')
      .eq('username', loginId)
      .single();

    if (byUsername) {
      user = byUsername;
    }
  }

  if (!user) {
    return res.status(401).json({ error: 'Invalid username/email or password' });
  }

  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) {
    return res.status(401).json({ error: 'Invalid username/email or password' });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });

  return res.status(200).json({
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
    },
  });
}
