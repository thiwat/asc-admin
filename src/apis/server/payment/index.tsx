import { request } from "../request";

export const requestApprovePayment = async (transNo: string, headers: object): Promise<unknown> => {
  return request(`v1/payment/${transNo}/approve`, 'PATCH', {}, headers)
}

export const requestCancelPayment = async (transNo: string, headers: object): Promise<unknown> => {
  return request(`v1/payment/${transNo}/cancel`, 'PATCH', {}, headers)
}
