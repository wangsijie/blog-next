import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  if (req.method === "POST") {
    const { text } = req.body;

    if (!text) {
      return res.status(400).end();
    }

    await axios.post(
      `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,
      {
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text,
      }
    );

    return res.status(201).end();
  }
  res.status(404).end();
}
