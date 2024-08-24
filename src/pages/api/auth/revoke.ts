import Cookies from 'cookies'
import { requestAuthRevoke } from "@/apis/server/auth";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const cookies = new Cookies(req, res)
      const result = await requestAuthRevoke({ token: cookies.get('token') })
      cookies.set('token', '', {
        path: '/',
        sameSite: process.env.COOKIE_SAME_SITE || 'lax',
        secure: process.env.COOKIE_SECURE === 'true',
        httpOnly: process.env.COOKIE_HTTP_ONLY === 'true',
        maxAge: result['expires_in'] * 1000
      })
      return res.status(200).json(result)
    } catch (e) {
      return res.status(e.status).json(e.error)
    }
  }
}