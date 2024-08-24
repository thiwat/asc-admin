import _get from 'lodash/get'
import SettingForm from "@/components/ui/Setting"
import { DetailItemType } from "@/enums/detail"
import { SectionProps } from "@/types/detail"

const SettingGatewayPage = () => {
  return (
    <SettingForm
      name={'gateway'}
      sections={SECTIONS}
    />
  )
}

const SECTIONS: SectionProps[] = [
  {
    title: 'setting_gateway_email',
    fields: [
      {
        name: ['email', 'enabled'],
        label: 'setting_gateway_email_enable',
        type: DetailItemType.boolean,
        required: true
      },
      {
        type: DetailItemType.space
      },
      {
        name: ['email', 'provider'],
        label: 'setting_gateway_email_provider',
        type: DetailItemType.select,
        options: {
          options: [
            { label: 'setting_gateway_provider_gmail', value: 'gmail' },
            { label: 'setting_gateway_provider_outlook', value: 'outlook' },
            { label: 'setting_gateway_provider_custom', value: 'custom' },
          ]
        }
      },
      {
        name: ['email', 'send_from'],
        label: 'setting_gateway_email_send_from',
        type: DetailItemType.string,
      },
      {
        name: ['email', 'host'],
        label: 'setting_gateway_email_host',
        type: DetailItemType.string,
      },
      {
        name: ['email', 'port'],
        label: 'setting_gateway_email_port',
        type: DetailItemType.number,
      },
      {
        name: ['email', 'username'],
        label: 'setting_gateway_email_username',
        type: DetailItemType.string,
      },
      {
        name: ['email', 'password'],
        label: 'setting_gateway_email_password',
        type: DetailItemType.password,
      },
    ]
  },
  {
    title: 'setting_gateway_line',
    fields: [
      {
        name: ['line', 'enabled'],
        label: 'setting_gateway_line_enable',
        type: DetailItemType.boolean,
        required: true
      },
      {
        name: ['line', 'access_token'],
        label: 'setting_gateway_line_access_token',
        type: DetailItemType.password,
        dependenciesFields: ['line.enabled'],
        required: ({ values }) => _get(values, 'line.enabled')
      },
    ]
  }
]

export default SettingGatewayPage