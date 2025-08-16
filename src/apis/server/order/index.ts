import { request } from "../request"

export const requestListTickets = (orderNo: string, headers: any) => {
  return request(`v1/order/${orderNo}/tickets`, 'GET', undefined, headers)
}