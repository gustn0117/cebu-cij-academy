import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { title, studentName, content } = req.body;

  if (!title || !studentName || !content) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const letter = {
    id: Date.now(),
    title,
    studentName,
    content,
    createdAt: new Date().toISOString(),
  };

  // Store letters in a JSON file
  const dataDir = path.join(process.cwd(), 'data');
  const filePath = path.join(dataDir, 'letters.json');

  try {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    let letters = [];
    if (fs.existsSync(filePath)) {
      letters = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }

    letters.push(letter);
    fs.writeFileSync(filePath, JSON.stringify(letters, null, 2));

    return res.status(200).json({ success: true, id: letter.id });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to save letter' });
  }
}
