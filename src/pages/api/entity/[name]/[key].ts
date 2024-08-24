import { requestDeleteRecord, requestEntityRecord, requestUpdateRecord } from '@/apis/server/entity'
import { getHeadersFromRequest } from '@/apis/server/request'
import _omit from 'lodash/omit'
import _get from 'lodash/get'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const result = await requestEntityRecord(
        req.query.name as string,
        req.query.key as string,
        getHeadersFromRequest(req)
      )
      return res.status(200).json(result)
    } catch (e) {
      return res.status(e.status).json(e.error)
    }
  }
  if (req.method === 'PUT') {
    try {
      const result = await requestUpdateRecord(
        req.query.name as string,
        req.query.key as string,
        req.body,
        getHeadersFromRequest(req)
      )
      return res.status(200).json(result)
    } catch (e) {
      return res.status(e.status).json(e.error)
    }
  }
  if (req.method === 'DELETE') {
    try {
      const result = await requestDeleteRecord(
        req.query.name as string,
        req.query.key as string,
        getHeadersFromRequest(req)
      )
      return res.status(200).json(result)
    } catch (e) {
      return res.status(e.status).json(e.error)
    }
  }

  res.status(404)
}