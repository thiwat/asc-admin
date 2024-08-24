import { t } from '@/utils/translate'
import { Form as AntForm, FormItemProps } from 'antd'
import { FormProps } from './types'

const Form = ({ children, ...props }: FormProps) => {
  return (
    <AntForm
      requiredMark={'optional'}
      layout={'vertical'}
      {...props}
    >
      {children}
    </AntForm>
  )
}

export const FormItem = (props: FormItemProps) => {

  const disabled = props['disabled']

  const rules = props.rules || []
  if (props.required && !disabled) {
    rules.push({
      required: true,
      message: t('info_required_field')
    })
  }

  return (
    <AntForm.Item {...props} rules={rules} required={props.required}>
      {props.children}
    </AntForm.Item>
  )
}

export const FormList = AntForm.List

export default Form
