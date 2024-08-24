import useAuth from "@/services/auth"
import { Typography } from "antd"
import { t } from "../../utils/translate"
import { LoginForm } from "@/components/form/LoginForm"

const LoginPage = () => {

  const {
    login,
  } = useAuth()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <div>
        <Typography.Title level={3}>
          {t('login_title')}
        </Typography.Title>
      </div>
      <LoginForm
        onSubmit={login}
      />
    </div>
  )
}

export default LoginPage