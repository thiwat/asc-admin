import { request } from "../request";
import {
  RequestForgotPasswordProps,
  RequestResendOtpProps,
  RequestResetPasswordProps,
  RequestUnlockUserProps,
  RequestVerifyOtpProps
} from "./types";

export const requestForgotPassword = (data: RequestForgotPasswordProps) => {
  data['app_key'] = process.env.APP_KEY
  data['secret_key'] = process.env.SECRET_KEY
  return request('v1/user/password/forgot', 'POST', data)
}

export const requestVerifyOtp = ({ otp }: RequestVerifyOtpProps) => {
  return request('v1/user/verify', 'POST', { otp })
}

export const requestResetPassword = ({ reset_password_token, new_password }: RequestResetPasswordProps) => {
  return request('v1/user/password/reset', 'POST', { reset_password_token, new_password })
}

export const requestResendOtp = ({ ref }: RequestResendOtpProps) => {
  return request('v1/user/resend', 'POST', { ref })
}

export const requestUnlockUser = ({ user_id }: RequestUnlockUserProps, headers?: object) => {
  return request(`v1/user/unlock/${user_id}`, 'PATCH', {}, headers)
}