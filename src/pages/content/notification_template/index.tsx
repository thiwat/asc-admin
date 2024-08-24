import _get from 'lodash/get'
import SettingForm from "@/components/ui/Setting"
import { DetailItemType } from "@/enums/detail"
import { SectionProps } from "@/types/detail"

const NotificationTemplatePage = () => {
  return (
    <SettingForm
      name={'notification_templates'}
      sections={SECTIONS}
    />
  )
}

const SECTIONS: SectionProps[] = [
  {
    fields: [
      {
        name: '',
        type: DetailItemType.notification_template,
        span: 24
      },
    ]
  }
]

export default NotificationTemplatePage