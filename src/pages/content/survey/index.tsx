import List from "@/components/ui/List"
import { FilterField } from "@/components/ui/List/Filters/types"
import { Entity } from "@/enums/entity"
import { FilterItemType, ListItemType } from "@/enums/list"
import { ListItemProps } from "@/types/list"

const SurveyPage = () => {
  return (
    <List
      entity={Entity.survey}
      columns={COLUMNS}
      filters={FILTERS}
      rowKey={'code'}
    />
  )
}

const COLUMNS: ListItemProps[] = [
  {
    type: ListItemType.string,
    title: 'survey_name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    type: ListItemType.string,
    title: 'survey_code',
    dataIndex: 'code',
    key: 'code'
  },
  {
    type: ListItemType.boolean,
    title: 'survey_enabled',
    dataIndex: 'enabled',
    key: 'enabled',
  },
  {
    type: ListItemType.boolean,
    title: 'survey_send_email',
    dataIndex: 'send_email',
    key: 'send_email',
  },
  {
    type: ListItemType.date,
    title: 'survey_last_update',
    dataIndex: 'updated_at',
    key: 'updated_at',
  },
]


const FILTERS: FilterField[] = [
  {
    label: 'survey_enabled',
    name: 'enabled',
    type: FilterItemType.boolean,
  },
]

export default SurveyPage