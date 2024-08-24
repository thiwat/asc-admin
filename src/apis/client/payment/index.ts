import { request } from "../request"
import { ApprovePaymentProps } from "./types"

export const requestApprovePayment = ({ trans_no }: ApprovePaymentProps): Promise<unknown> => {
  return request('payment/approve', 'PATCH', { trans_no })
}

export const requestCancelPayment = ({ trans_no }: ApprovePaymentProps): Promise<unknown> => {
  return request('payment/cancel', 'PATCH', { trans_no })
}