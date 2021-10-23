import type { NextApiRequest, NextApiResponse } from "next";

let note = '';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  if (req.method === 'GET') {
    res.status(200).send(note);
  } else if (req.method === 'POST') {
    const { content } = req.body;
    note = content;
    res.status(201).end();
  }
  res.status(404).end();
}
