import List from "@/components/ui/List"
import { FilterField } from "@/components/ui/List/Filters/types"
import { CmsBlockType } from "@/enums/cms"
import { Entity } from "@/enums/entity"
import { FilterItemType, ListItemType } from "@/enums/list"
import { ListItemProps } from "@/types/list"

const CmsBlockPage = () => {
  return (
    <List
      entity={Entity.cms_block}
      columns={COLUMNS}
      filters={FILTERS}
      rowKey={'code'}
    />
  )
}

const COLUMNS: ListItemProps[] = [
  {
    type: ListItemType.string,
    title: 'cms_block_name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    type: ListItemType.string,
    title: 'cms_block_code',
    dataIndex: 'code',
    key: 'code'
  },
  {
    type: ListItemType.boolean,
    title: 'cms_block_enabled',
    dataIndex: 'enabled',
    key: 'enabled',
  },
  {
    type: ListItemType.badge,
    title: 'cms_block_type',
    dataIndex: 'type',
    key: 'type',
    options: {
      prefixTranslate: 'cms_block_type_'
    }
  },
  {
    type: ListItemType.date,
    title: 'cms_block_last_update',
    dataIndex: 'updated_at',
    key: 'updated_at',
  },
]

const FILTERS: FilterField[] = [
  {
    label: 'cms_block_enabled',
    name: 'enabled',
    type: FilterItemType.boolean,
  },
  {
    label: 'cms_block_type',
    name: 'type',
    type: FilterItemType.options,
    options: Object.values(CmsBlockType).map(i => ({
      label: `cms_block_type_${i}`,
      value: i
    }))
  }
]

export default CmsBlockPage