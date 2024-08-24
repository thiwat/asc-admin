import List from "@/components/ui/List"
import { Entity } from "@/enums/entity"
import { ListItemType } from "@/enums/list"
import { ListItemProps } from "@/types/list"

const ApplicationPage = () => {
  return (
    <List
      entity={Entity.application}
      columns={COLUMNS}
      rowKey={'code'}
    />
  )
}

const COLUMNS: ListItemProps[] = [
  {
    type: ListItemType.string,
    title: 'application_name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    type: ListItemType.string,
    title: 'application_code',
    dataIndex: 'code',
    key: 'code'
  },
  {
    type: ListItemType.string,
    title: 'application_app_key',
    dataIndex: 'app_key',
    key: 'app_key',
  },
  {
    type: ListItemType.boolean,
    title: 'application_enabled',
    dataIndex: 'enabled',
    key: 'enabled',
  },
]

export default ApplicationPage