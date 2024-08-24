import Cookies from 'cookies'
import _get from 'lodash/get'
import { join } from 'path'

export const request = async (
  path: string,
  method: string,
  body?: any,
  reqHeaders?: any
) => {
  const headers = {
    'Content-Type': 'application/json',
    ...reqHeaders
  }

  method = method || 'GET'
  const url = join(process.env.API_GATEWAY_URL, path)

  const res = await fetch(url, {
    method: method.toUpperCase(),
    headers,
    body: headers['Content-Type'].startsWith('multipart/form-data')
      ? body
      : JSON.stringify(body)
  })
  const resJson = await res.json()
  if (res.status < 200 || res.status >= 300) {
    throw {
      status: res.status,
      error: resJson.message
    }
  }

  return resJson
}

export const getHeadersFromRequest = (req: any) => {
  const res = {}

  const cookies = new Cookies(req)

  if (cookies.get('token')) {
    res['Authorization'] = `Bearer ${cookies.get('token')}`
  }

  res['client-ip'] = (
    _get(req, 'headers.client-ip') ||
    _get(req, 'headers.x-forwarded-for') ||
    _get(req, 'ip') ||
    _get(req, 'connection.remoteAddress')
  ).split(',')[0];

  return res
}

export const buildQuery = (query) => {
  const q = {
    page: _get(query, 'page', 1),
    page_size: _get(query, 'page_size', 10),
    sort: _get(query, 'sort', ''),
    keywords: _get(query, 'keywords', ''),
    filter: _get(query, 'filter', '')
  }
  if (q.filter) {
    q.filter = encodeURIComponent(q.filter)
  }
  if (q.keywords) {
    q.keywords = encodeURIComponent(q.keywords)
  }
  return Object.entries(q)
    .map(i => `${i[0]}=${i[1]}`)
    .join('&')
}