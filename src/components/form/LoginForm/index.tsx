import { Button, Input } from "antd"
import { t } from "../../../utils/translate"
import Form, { FormItem } from "../Form"
import styles from './index.module.css'
import { LoginFormProps } from "./types"

export const LoginForm = ({
  onSubmit,
}: LoginFormProps) => {

  return (
    <Form
      name={'login-form'}
      className={styles.form}
      onFinish={onSubmit}
    >
      <FormItem
        label={t('login_username')}
        name={'username'}
        required
      >
        <Input />
      </FormItem>
      <FormItem
        label={t('login_password')}
        name={'password'}
        required
      >
        <Input.Password />
      </FormItem>
      <Button
        className={styles.loginButton}
        type={'primary'}
        htmlType={'submit'}
        size={'large'}
      >
        {t('login_button_submit')}
      </Button>
    </Form>
  )
}