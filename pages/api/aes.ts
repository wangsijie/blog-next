import { Buffer } from "buffer";
import { createCipheriv, scryptSync, createDecipheriv } from "crypto";

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ encrypted?: string, decrypted?: string}>
) {
  if (req.method !== 'POST') {
    return res.status(404).end();
  }

  const { content, password, type } = req.body;

  if (!content || !password || (type !== 'encrypt' && type !== 'decrypt')) {
    return res.status(400).end();
  }
  
  const algorithm = "aes-192-cbc";
  const key = scryptSync(password, "salt", 24);
  const iv = Buffer.alloc(16, 0);

  if (type === 'encrypt') {
    const cipher = createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(content, "utf8", "hex");
    encrypted += cipher.final("hex");
    
    return res.json({ encrypted });
  }
  
  const decipher = createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(content, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  
  return res.json({ decrypted });
}
