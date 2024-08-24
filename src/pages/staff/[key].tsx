import Detail from "@/components/ui/Detail"
import { USER_STATE_COLORS } from "@/constants/colors"
import { ActionMode, DetailItemType } from "@/enums/detail"
import { Entity } from "@/enums/entity"
import { SectionProps } from "@/types/detail"
import { Roles } from '@/enums/role'
import { useParams } from "next/navigation"
import { t } from "@/utils/translate"
import { requestUnlockUser } from "@/apis/client/user"

const UserDetail = () => {

  const params = useParams()

  return (
    <Detail
      title={'${ full_name }'}
      entity={Entity.user}
      sections={SECTIONS}
      keyData={params.key as string}
      badge={{
        fieldName: 'state',
        mapColors: USER_STATE_COLORS,
        prefixTranslate: 'user_state_'
      }}
      customActions={[
        {
          label: t('user_action_unlock'),
          key: 'unlock',
          action: requestUnlockUser,
          conditions: ({ values }) => values?.state === 'locked_out',
          params: ({ values }) => ({
            user_id: values['user_id']
          })
        }
      ]}
    />
  )
}

const SECTIONS: SectionProps[] = [
  {
    title: 'user_access_information',
    fields: [
      {
        label: 'user_username',
        name: 'username',
        type: DetailItemType.string,
        required: true,
        disabled: ({ mode }) => mode === ActionMode.update
      },
      {
        label: 'user_email',
        name: 'email',
        type: DetailItemType.string,
        required: true,
        disabled: ({ mode }) => mode === ActionMode.update
      },
      {
        label: 'user_mobile_no',
        name: 'mobile_no',
        type: DetailItemType.string,
        required: true,
        disabled: ({ mode }) => mode === ActionMode.update
      },
      {
        label: 'user_last_logged_in',
        name: 'last_logged_in_at',
        type: DetailItemType.datetime,
        disabled: true
      }
    ]
  },
  {
    title: 'user_general_information',
    fields: [
      {
        label: 'user_first_name',
        name: 'first_name',
        type: DetailItemType.string,
        required: true,
        disabled: ({ mode }) => mode === ActionMode.update
      },
      {
        label: 'user_last_name',
        name: 'last_name',
        type: DetailItemType.string,
        required: true,
        disabled: ({ mode }) => mode === ActionMode.update
      },
      {
        label: 'user_role',
        name: 'role',
        type: DetailItemType.select,
        required: true,
        disabled: ({ mode }) => mode === ActionMode.update,
        options: {
          options: Object.keys(Roles)
            .filter(i => i !== 'customer')
            .map(i => ({ label: t(`user_role_${i}`), value: i }))
        }
      }
    ]
  }
]

export default UserDetail