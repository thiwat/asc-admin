import List from "@/components/ui/List"
import { FilterField } from "@/components/ui/List/Filters/types"
import { Entity } from "@/enums/entity"
import { FilterItemType, ListItemType } from "@/enums/list"
import { ListItemProps } from "@/types/list"

const CmsPagePage = () => {
  return (
    <List
      entity={Entity.cms_page}
      columns={COLUMNS}
      filters={FILTERS}
      rowKey={'code'}
    />
  )
}

const COLUMNS: ListItemProps[] = [
  {
    type: ListItemType.string,
    title: 'cms_page_name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    type: ListItemType.string,
    title: 'cms_page_code',
    dataIndex: 'code',
    key: 'code'
  },
  {
    type: ListItemType.boolean,
    title: 'cms_page_enabled',
    dataIndex: 'enabled',
    key: 'enabled',
  },
  {
    type: ListItemType.date,
    title: 'cms_page_last_update',
    dataIndex: 'updated_at',
    key: 'updated_at',
  },
]

const FILTERS: FilterField[] = [
  {
    label: 'cms_page_enabled',
    name: 'enabled',
    type: FilterItemType.boolean,
  },
]

export default CmsPagePage