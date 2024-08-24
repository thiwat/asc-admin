import { request } from "../request";
import {
  RequestForgotPasswordProps,
  RequestResendOtpProps,
  RequestResetPasswordProps,
  RequestUnlockUserProps,
  RequestVerifyOtpProps
} from "./types";

export const requestForgotPassword = ({ username }: RequestForgotPasswordProps) => {
  return request('user/password/forgot', 'POST', { username })
}

export const requestVerifyOtp = ({ otp }: RequestVerifyOtpProps) => {
  return request('user/verify', 'POST', { otp })
}

export const requestResetPassword = ({ reset_password_token, new_password }: RequestResetPasswordProps) => {
  return request('user/password/reset', 'POST', { reset_password_token, new_password })
}

export const requestResendOtp = ({ ref }: RequestResendOtpProps) => {
  return request('user/resend', 'POST', { ref })
}

export const requestUnlockUser = ({ user_id }: RequestUnlockUserProps) => {
  return request(`user/unlock`, 'PATCH', { user_id })
}