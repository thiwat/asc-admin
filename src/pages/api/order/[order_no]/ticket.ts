import { requestListTickets } from "@/apis/server/order";
import { getHeadersFromRequest } from "@/apis/server/request";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const result = await requestListTickets(req.query.order_no as string, getHeadersFromRequest(req))
      return res.status(200).json(result)
    } catch (e) {
      return res.status(e.status).json(e.error)
    }
  }
}