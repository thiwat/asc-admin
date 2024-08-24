import { getHeadersFromRequest } from "@/apis/server/request";
import { requestUnlockUser } from "@/apis/server/user";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PATCH') {
    try {
      const result = await requestUnlockUser(
        req.body,
        getHeadersFromRequest(req)
      )
      return res.status(200).json(result)
    } catch (e) {
      return res.status(e.status).json(e.error)
    }
  }
}