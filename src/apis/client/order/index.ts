import { request } from "../request"
import { RequestListTicketInput } from "./types"

export const requestListTickets = ({ order_no }: RequestListTicketInput) => {
  return request(`/order/${order_no}/ticket`, 'GET', undefined)
}