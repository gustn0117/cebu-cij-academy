import { supabase } from '@/lib/supabase';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'cij-academy-secret-2024';

function getUserFromToken(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) return null;
  try {
    return jwt.verify(authHeader.split(' ')[1], JWT_SECRET);
  } catch {
    return null;
  }
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) return res.status(500).json({ error: error.message });

    // For reviews with user_id, fetch user names from users table
    const userIds = [...new Set(data.filter(r => r.user_id).map(r => r.user_id))];
    let userMap = {};
    if (userIds.length > 0) {
      const { data: users } = await supabase
        .from('users')
        .select('id, name')
        .in('id', userIds);
      if (users) {
        users.forEach(u => { userMap[u.id] = u.name; });
      }
    }

    const enriched = data.map(r => ({
      ...r,
      name: r.user_id && userMap[r.user_id] ? userMap[r.user_id] : r.name,
    }));

    return res.status(200).json(enriched);
  }

  if (req.method === 'POST') {
    const decoded = getUserFromToken(req);
    if (!decoded) return res.status(401).json({ error: 'Authentication required' });

    const { title, text, image_url } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Review text is required' });
    }

    // Get user name from users table
    const { data: user } = await supabase
      .from('users')
      .select('name')
      .eq('id', decoded.id)
      .single();

    const insertData = {
      title: title || null,
      text,
      user_id: decoded.id,
      name: user?.name || 'Anonymous',
    };
    if (image_url) insertData.image_url = image_url;

    const { data, error } = await supabase
      .from('reviews')
      .insert(insertData)
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ success: true, review: data });
  }

  if (req.method === 'PUT') {
    const decoded = getUserFromToken(req);
    if (!decoded) return res.status(401).json({ error: 'Authentication required' });

    const { id, title, text, image_url } = req.body;
    if (!id) return res.status(400).json({ error: 'Review ID is required' });

    // Verify ownership
    const { data: existing } = await supabase
      .from('reviews')
      .select('user_id')
      .eq('id', Number(id))
      .single();

    if (!existing || existing.user_id !== decoded.id) {
      return res.status(403).json({ error: 'You can only edit your own reviews' });
    }

    const updates = {};
    if (title !== undefined) updates.title = title;
    if (text !== undefined) updates.text = text;
    if (image_url !== undefined) updates.image_url = image_url;

    const { data, error } = await supabase
      .from('reviews')
      .update(updates)
      .eq('id', Number(id))
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ success: true, review: data });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
