import { requestCreateRecord, requestList } from '@/apis/server/entity'
import { getHeadersFromRequest } from '@/apis/server/request'
import _omit from 'lodash/omit'
import _get from 'lodash/get'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const result = await requestList(
        _get(req, 'query.name'),
        _omit(req.query, ['name']),
        getHeadersFromRequest(req)
      )
      return res.status(200).json(result)
    } catch (e) {
      return res.status(e.status).json(e.error)
    }
  }
  if (req.method === 'POST') {
    try {
      const result = await requestCreateRecord(
        _get(req, 'query.name'),
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