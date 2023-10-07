// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createClient } from "microcms-js-sdk";
import type { NextApiRequest, NextApiResponse } from "next";

export const clientMyCatCard = createClient({
  apiKey: process.env.NEXT_PUBLIC_API_KEY!,
  serviceDomain: "catterycanon2592",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await clientMyCatCard.create({
      content: req.body,
      endpoint: "mycat",
    });
    res.status(200).json("OK");
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
  }
}
