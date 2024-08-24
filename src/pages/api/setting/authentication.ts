import { getHeadersFromRequest } from '@/apis/server/request'
import _omit from 'lodash/omit'
import _get from 'lodash/get'
import type { NextApiRequest, NextApiResponse } from 'next'
import { requestGetSetting, requestSetSetting } from '@/apis/server/setting'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const authen = await requestGetSetting(
        'authentication',
        getHeadersFromRequest(req)
      )
      const social = await requestGetSetting(
        'social',
        getHeadersFromRequest(req)
      )
      return res.status(200).json({
        authen,
        social
      })
    } catch (e) {
      return res.status(e.status).json(e.error)
    }
  }
  if (req.method === 'PUT') {
    try {
      const authen = await requestSetSetting(
        'authentication',
        req.body.authen,
        getHeadersFromRequest(req)
      )
      const social = await requestSetSetting(
        'social',
        req.body.social,
        getHeadersFromRequest(req)
      )
      return res.status(200).json({
        authen,
        social
      })
    } catch (e) {
      return res.status(e.status).json(e.error)
    }
  }

  res.status(404)
}