import { getHeadersFromRequest } from '@/apis/server/request'
import _omit from 'lodash/omit'
import _get from 'lodash/get'
import type { NextApiRequest, NextApiResponse } from 'next'
import { requestGetSetting, requestSetSetting } from '@/apis/server/setting'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const result = await requestGetSetting(
        req.query.name as string,
        getHeadersFromRequest(req)
      )
      return res.status(200).json(result)
    } catch (e) {
      return res.status(e.status).json(e.error)
    }
  }
  if (req.method === 'PUT') {
    try {
      const result = await requestSetSetting(
        req.query.name as string,
        req.body,
        getHeadersFromRequest(req)
      )
      return res.status(200).json(result)
    } catch (e) {
      return res.status(e.status).json(e.error)
    }
  }

  res.status(404)
}