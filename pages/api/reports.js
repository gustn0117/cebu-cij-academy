import { supabase } from '@/lib/supabase';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // List all reports (summary only - no content, no password)
    const { data, error } = await supabase
      .from('reports')
      .select('id, title, image_url, created_at')
      .order('created_at', { ascending: false });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === 'POST') {
    const { id, password } = req.body;

    if (!id || !password) {
      return res.status(400).json({ error: 'id and password are required' });
    }

    const { data: report, error } = await supabase
      .from('reports')
      .select('*')
      .eq('id', Number(id))
      .single();

    if (error || !report) {
      return res.status(404).json({ error: 'Report not found' });
    }

    if (report.password && report.password !== password) {
      return res.status(403).json({ error: 'Incorrect password' });
    }

    const { password: _, ...reportData } = report;
    return res.status(200).json(reportData);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
