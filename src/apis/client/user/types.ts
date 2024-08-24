export type RequestForgotPasswordProps = {
  username: string;
}

export type RequestVerifyOtpProps = {
  otp: string;
}

export type RequestResetPasswordProps = {
  reset_password_token: string;
  new_password: string;
}

export type RequestResendOtpProps = {
  ref: string;
}

export type RequestUnlockUserProps = {
  user_id: string;
}