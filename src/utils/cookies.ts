import { COOKIE_OPTIONS } from '@/constants/cookies'
import _cloneDeep from 'lodash/cloneDeep'
import Cookies, { CookieSetOptions } from 'universal-cookie'

const newCookies = new Cookies()

type SameSite = boolean | 'strict' | 'lax' | 'none'

const set = (key: string, value: any, ttl?: number) => {

  const setOptions: CookieSetOptions = {
    path: '/',
    secure: COOKIE_OPTIONS.secure,
    sameSite: COOKIE_OPTIONS.sameSite as SameSite
  }

  if (ttl > 0) {
    setOptions['maxAge'] = ttl
  }
  return newCookies.set(key, value, setOptions as CookieSetOptions)
}

const get = (key: string) => {
  return newCookies.get(key)
}

const remove = (key: string) => {

  const setOptions: CookieSetOptions = {
    path: '/',
    secure: COOKIE_OPTIONS.secure,
    sameSite: COOKIE_OPTIONS.sameSite as SameSite
  }

  return newCookies.remove(key, setOptions)
}

export const cookies = {
  set,
  get,
  remove
}

