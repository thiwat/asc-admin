import { t } from "@/utils/translate";
import { Tabs } from "antd";
import { NotificationTemplateProps } from "./types";
import NotificationTemplateTab from './NotificationTemplateTab'
import { FormItem } from "../Form";

const NotificationTemplate = ({ }: NotificationTemplateProps) => {
  return (
    <Tabs
      items={[
        {
          label: t('common_notification_tempalte_email'),
          key: 'email',
          children: (
            <FormItem noStyle name={'email_templates'}>
              <NotificationTemplateTab type={'email'} />
            </FormItem>
          )
        },
        {
          label: t('common_notification_tempalte_line'),
          key: 'line',
          children: (
            <FormItem noStyle name={'line_templates'}>
              <NotificationTemplateTab type={'line'} />
            </FormItem>
          )
        },
      ]}
    />
  )
}

export default NotificationTemplate