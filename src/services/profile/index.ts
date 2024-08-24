import { requestAuthRevoke } from "@/apis/client/auth"
import { useProfileState } from "@/atoms/profile"
import { useRequest } from "ahooks"
import { useRouter } from "next/router"

const useProfile = () => {

  const router = useRouter()
  const [profile, setProfile] = useProfileState()

  const revokeRequest = useRequest(requestAuthRevoke, {
    manual: true,
    onSuccess: (r) => {
      setProfile({})
      router.push('/login')
    },
    onError: (e) => {
      setProfile({})
      router.push('/login')
    }
  })

  const onLogout = () => {
    revokeRequest.run()
  }

  return {
    profile,
    onLogout
  }
}

export default useProfile