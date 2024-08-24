import List from "@/components/ui/List"
import { FilterField } from "@/components/ui/List/Filters/types"
import { USER_STATE_COLORS } from "@/constants/colors"
import { Entity } from "@/enums/entity"
import { FilterItemType, ListItemType } from "@/enums/list"
import { Roles } from "@/enums/role"
import { UserState } from "@/enums/user"
import { ListItemProps } from "@/types/list"

const UserPage = () => {
  return (
    <List
      entity={Entity.user}
      columns={COLUMNS}
      rowKey={'user_id'}
      baseFilters={{ role: { $in: [Roles.admin] } }}
      filters={FILTERS}
    />
  )
}

const COLUMNS: ListItemProps[] = [
  {
    type: ListItemType.string,
    title: 'user_email',
    dataIndex: 'email',
    key: 'email'
  },
  {
    type: ListItemType.string,
    title: 'user_full_name',
    dataIndex: 'full_name',
    key: 'full_name'
  },
  {
    type: ListItemType.badge,
    title: 'user_state',
    dataIndex: 'state',
    key: 'state',
    options: {
      mapColors: USER_STATE_COLORS,
      prefixTranslate: 'user_state_'
    }
  },
  {
    type: ListItemType.badge,
    title: 'user_role',
    dataIndex: 'role',
    key: 'role',
    options: {
      prefixTranslate: 'user_role_'
    }
  },
  {
    type: ListItemType.date,
    title: 'user_last_logged_in_date',
    dataIndex: 'last_logged_in_at',
    key: 'last_logged_in_at'
  },
]

const FILTERS: FilterField[] = [
  {
    label: 'user_state',
    name: 'state',
    type: FilterItemType.options,
    options: Object.values(UserState).map(i => ({
      label: `user_state_${i}`,
      value: i
    }))
  }
]

export default UserPage