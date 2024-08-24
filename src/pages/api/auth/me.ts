import { requestMyProfile } from "@/apis/server/auth";
import { getHeadersFromRequest } from "@/apis/server/request";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const result = await requestMyProfile(getHeadersFromRequest(req))
      return res.status(200).json(result)
    } catch (e) {
      return res.status(e.status).json(e.error)
    }
  }
}