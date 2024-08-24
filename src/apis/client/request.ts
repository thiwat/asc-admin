import _get from 'lodash/get'
import { join } from "path"
import _isArray from 'lodash/isArray'

export const request = async (
  path: string,
  method: string,
  body?: any,
  isMultipart?: any,
) => {

  const headers = isMultipart
    ? {}
    : { 'Content-Type': 'application/json' }

  method = method || 'GET'
  const reqPath = join('/api', path)

  const res = await fetch(reqPath, {
    method: method.toUpperCase(),
    headers,
    body: isMultipart ? body : JSON.stringify(body)
  })
  const resJson = await res.json()
  if (res.status < 200 || res.status >= 300) {
    if (resJson === "Forbidden resource") {
      return window.location.reload()
    }
    throw new Error(_isArray(resJson)
      ? resJson[0]
      : resJson.message || resJson
    )
  }

  return resJson
}
