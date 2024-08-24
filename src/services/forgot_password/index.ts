import {
  requestForgotPassword,
  requestResendOtp,
  requestResetPassword,
  requestVerifyOtp
} from "@/apis/client/user"
import { t } from "@/utils/translate"
import { useRequest } from "ahooks"
import { message } from "antd"
import { useRouter } from "next/router"
import { useRef } from "react"

const useForgotPassword = () => {

  const router = useRouter()
  const data = useRef<any>({})
  const carouselRef = useRef(null)

  const forgotPasswordRequest = useRequest(requestForgotPassword, {
    manual: true,
    onSuccess: (r) => {
      data.current = { ...data.current, ref: r.ref, reset_password_token: r.reset_password_token }
      carouselRef.current.goTo(1)
    },
    onError: (e) => {
      message.error(e.message)
    }
  })

  const resendOtpRequest = useRequest(requestResendOtp, {
    manual: true,
    onSuccess: (r) => {
      data.current = { ...data.current, ref: r.ref }
    }
  })

  const verifyOtpRequest = useRequest(requestVerifyOtp, {
    manual: true,
    onSuccess: (r) => {
      carouselRef.current.goTo(2)
    },
    onError: (e) => {
      message.error(e.message)
    }
  })

  const resetPasswordRequest = useRequest(requestResetPassword, {
    manual: true,
    onSuccess: (r) => {
      message.success(t('forgot_password_success'))
      router.push('/login')
    },
    onError: (e) => {
      message.error(e.message)
    }
  })

  const onForgotPassword = ({ email }) => {
    data.current = { ...data.current, email }
    forgotPasswordRequest.run({
      username: email
    })
  }

  const onVerifyOtp = ({ otp }) => {
    verifyOtpRequest.run({
      otp: `${data.current['ref']}-${otp}`
    })
  }

  const onResend = () => {
    resendOtpRequest.run({
      ref: data.current['ref']
    })
  }

  const onReset = ({ password }) => {
    resetPasswordRequest.run({
      new_password: password,
      reset_password_token: data.current['reset_password_token']
    })
  }

  return {
    data: data.current,
    carouselRef,
    onReset,
    onResend,
    onVerifyOtp,
    onForgotPassword
  }
}

export default useForgotPassword