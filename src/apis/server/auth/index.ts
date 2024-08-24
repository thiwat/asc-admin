import { request } from "../request";
import { AuthInput, AuthRevokeInput } from "./types";

export const requestAuthLogin = async (data: AuthInput): Promise<unknown> => {
  data['app_key'] = process.env.APP_KEY
  data['secret_key'] = process.env.SECRET_KEY
  return request('v1/auth/access_token', 'POST', data)
}

export const requestAuthRevoke = (data: AuthRevokeInput) => {
  return request('v1/auth/revoke', 'POST', { token: data.token })
}

export const requestMyProfile = async (headers?: object): Promise<unknown> => {
  return request('v1/user/me', 'GET', undefined, headers)
}