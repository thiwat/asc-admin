import { request } from "../request";

export const requestApprovePayment = async (orderNo: string, headers: object): Promise<unknown> => {
  return request(`v1/order//approve`, 'PATCH', { order_no: orderNo }, headers)
}

export const requestCancelPayment = async (transNo: string, headers: object): Promise<unknown> => {
  return request(`v1/payment/${transNo}/cancel`, 'PATCH', {}, headers)
}
