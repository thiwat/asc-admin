import _get from 'lodash/get'
import SettingForm from "@/components/ui/Setting"
import { DetailItemType } from "@/enums/detail"
import { SectionProps } from "@/types/detail"

const SettingIntegrationPage = () => {
  return (
    <SettingForm
      name={'integration'}
      sections={SECTIONS}
    />
  )
}

const SECTIONS: SectionProps[] = [
  {
    title: 'setting_line_integration',
    fields: [
      {
        name: ['line', 'enable_mock_mode'],
        label: 'setting_line_enable_mock_mode',
        type: DetailItemType.boolean,
        required: true
      },
      {
        name: ['line', 'liff_id_tickets'],
        label: 'setting_line_liff_id_tickets',
        type: DetailItemType.string,
        required: true
      },
      {
        name: ['line', 'liff_id_register'],
        label: 'setting_line_liff_id_register',
        type: DetailItemType.string,
        required: true
      },
    ]
  }
]

export default SettingIntegrationPage