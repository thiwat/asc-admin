import { request } from "../request"
import { ApprovePaymentProps } from "./types"

export const requestApprovePayment = ({ order_no }: ApprovePaymentProps): Promise<unknown> => {
  return request('payment/approve', 'PATCH', { order_no })
}

export const requestCancelPayment = ({ order_no }: ApprovePaymentProps): Promise<unknown> => {
  return request('payment/cancel', 'PATCH', { order_no })
}