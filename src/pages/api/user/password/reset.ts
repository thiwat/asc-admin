import { requestResetPassword } from "@/apis/server/user";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const result = await requestResetPassword(
        req.body
      )
      return res.status(200).json(result)
    } catch (e) {
      return res.status(e.status).json(e.error)
    }
  }
}