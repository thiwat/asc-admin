import { requestAuthLogin, requestMyProfile } from "@/apis/client/auth"
import { useSetProfileState } from "@/atoms/profile"
import { useRequest } from "ahooks"
import { message } from "antd"
import { useRouter } from "next/router"

const useAuth = () => {

  const router = useRouter()
  const setProfile = useSetProfileState()

  const authRequest = useRequest(requestAuthLogin, {
    manual: true,
    onSuccess: (r) => {
      myProfileRequest.run()
    },
    onError: (e) => {
      message.error(e.message)
    }
  })


  const myProfileRequest = useRequest(requestMyProfile, {
    manual: true,
    onSuccess: (r) => {
      setProfile(r)
      router.push('/')
    }
  })

  const login = (values: any) => {
    authRequest.run({
      username: values.username,
      password: values.password
    })
  }

  return {
    login,
  }
}

export default useAuth