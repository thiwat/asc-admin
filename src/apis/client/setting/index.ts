import { request } from "../request"
import {
  RequestGetSettingProps,
  RequestGetTranslateProps,
  RequestSetSettingProps,
  RequestSetTranslateProps
} from "./types"

export const requestGetSetting = async ({ name }: RequestGetSettingProps) => {
  return request(`/setting/${name}`, 'get')
}

export const requestSetSetting = async ({ name, data }: RequestSetSettingProps) => {
  return request(`/setting/${name}`, 'put', data)
}

export const requestGetTranslate = async ({ site, locale }: RequestGetTranslateProps) => {
  return request(`/setting/translate/${site}/${locale}`, 'get')
}

export const requestSetTranslate = async ({ site, locale, data }: RequestSetTranslateProps) => {
  return request(`/setting/translate/${site}/${locale}`, 'put', data)
}