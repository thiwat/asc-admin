import { requestRevokeSecret } from "@/apis/client/application"
import Detail from "@/components/ui/Detail"
import { ActionMode, DetailItemType } from "@/enums/detail"
import { Entity } from "@/enums/entity"
import { SectionProps } from "@/types/detail"
import { t } from "@/utils/translate"
import { useParams } from "next/navigation"

const ApplicationDetail = () => {

  const params = useParams()

  return (
    <Detail
      title={'${ name }'}
      entity={Entity.application}
      sections={SECTIONS}
      keyData={params.key as string}
      actions={{
        delete: ({ values }) => values?.code !== 'default'
      }}
      customActions={[
        {
          label: t('application_action_revoke_secret'),
          key: 'revoke_secret',
          action: requestRevokeSecret,
          conditions: ({ values }) => values?.code !== 'default',
          params: ({ values }) => ({
            code: values['code']
          })
        }
      ]}
    />
  )
}

const SECTIONS: SectionProps[] = [
  {
    title: 'application_general_information',
    fields: [
      {
        label: 'application_enabled',
        name: 'enabled',
        type: DetailItemType.boolean,
        required: true,
        disabled: ({ mode }) => mode === ActionMode.update
      },
      {
        type: DetailItemType.space,
        span: 24
      },
      {
        label: 'application_name',
        name: 'name',
        type: DetailItemType.string,
        required: true,
      },
      {
        label: 'application_code',
        name: 'code',
        type: DetailItemType.string,
        required: true,
        disabled: ({ mode }) => mode === ActionMode.update
      },
      {
        label: 'application_description',
        name: 'description',
        type: DetailItemType.string,
        required: true,
        span: 24
      },
    ]
  },
  {
    title: 'application_key_information',
    fields: [
      {
        label: 'application_app_key',
        name: 'app_key',
        type: DetailItemType.string,
        disabled: true,
        required: true
      },
      {
        label: 'application_secret_key',
        name: 'secret_key',
        type: DetailItemType.string,
        disabled: true,
        required: true
      },
      {
        label: 'application_roles',
        name: 'roles',
        type: DetailItemType.select,
        required: true,
        options: {
          mode: 'multiple',
          options: [
            { label: 'user_role_admin', value: 'admin' },
            { label: 'user_role_customer', value: 'customer' },
            { label: 'user_role_lawyer', value: 'lawyer' },
            { label: 'user_role_web_master', value: 'web_master' },
          ]
        },
      },
      {
        label: 'application_use_recaptcha',
        name: 'use_recaptcha',
        type: DetailItemType.boolean,
        required: true
      },
    ]
  }
]

export default ApplicationDetail