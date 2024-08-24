import { request } from "../request";

export const requestRevokeSecret = async (code: string, headers: object): Promise<unknown> => {
  return request(`v1/application/${code}/revoke`, 'PATCH', {}, headers)
}
