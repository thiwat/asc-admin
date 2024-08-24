import _get from 'lodash/get'
import SettingForm from "@/components/ui/Setting"
import { DetailItemType } from "@/enums/detail"
import { SectionProps } from "@/types/detail"

const SettingOrderPage = () => {
  return (
    <SettingForm
      name={'order'}
      sections={SECTIONS}
    />
  )
}

const SECTIONS: SectionProps[] = [
  {
    title: 'setting_payment_information',
    fields: [
      {
        name: 'trans_no_format',
        label: 'setting_payment_trans_no_format',
        type: DetailItemType.string,
        required: true,
      },
      {
        name: 'account_no',
        label: 'setting_payment_account_no',
        type: DetailItemType.string,
        required: true,
      }
    ]
  }
]

export default SettingOrderPage