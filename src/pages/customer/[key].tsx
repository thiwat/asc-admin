import Detail from "@/components/ui/Detail"
import { USER_STATE_COLORS } from "@/constants/colors"
import { ActionMode, DetailItemType } from "@/enums/detail"
import { Entity } from "@/enums/entity"
import { SectionProps } from "@/types/detail"
import { Roles } from '@/enums/role'
import { useParams } from "next/navigation"

const UserDetail = () => {

  const params = useParams()

  return (
    <Detail
      title={'${ full_name }'}
      entity={Entity.user}
      sections={SECTIONS}
      keyData={params.key as string}
      actions={{ delete: false }}
      badge={{
        fieldName: 'state',
        mapColors: USER_STATE_COLORS,
        prefixTranslate: 'user_state_'
      }}
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
        label: 'user_citizen_number',
        name: 'citizen_number',
        type: DetailItemType.string,
        required: true,
        disabled: ({ mode }) => mode === ActionMode.update
      },
      {
        label: 'user_date_of_birth',
        name: 'date_of_birth',
        type: DetailItemType.datetime,
        required: true,
        options: {
          format: 'DD MMM YYYY'
        },
        disabled: ({ mode }) => mode === ActionMode.update
      },
      {
        label: 'user_package',
        name: 'package_name',
        type: DetailItemType.string,
        required: true,
        disabled: ({ mode }) => mode === ActionMode.update
      },
    ]
  }
]

export default UserDetail