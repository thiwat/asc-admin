import { requestEntityTags } from '@/apis/server/entity'
import { getHeadersFromRequest } from '@/apis/server/request'
import _get from 'lodash/get'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const result = await requestEntityTags(
        _get(req, 'query.name'),
        getHeadersFromRequest(req)
      )
      return res.status(200).json(result)
    } catch (e) {
      return res.status(e.status).json(e.error)
    }
  }

  res.status(404)
}