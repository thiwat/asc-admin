import { requestRevokeSecret } from "@/apis/server/application";
import { getHeadersFromRequest } from "@/apis/server/request";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PATCH') {
    try {
      const result = await requestRevokeSecret(req.body.code, getHeadersFromRequest(req))
      return res.status(200).json(result)
    } catch (e) {
      return res.status(e.status).json(e.error)
    }
  }
}