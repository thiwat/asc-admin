import List from "@/components/ui/List"
import { FilterField } from "@/components/ui/List/Filters/types"
import { Entity } from "@/enums/entity"
import { FilterItemType, ListItemType } from "@/enums/list"
import { ListItemProps } from "@/types/list"

const SurveyAnswerPage = () => {
  return (
    <List
      entity={Entity.survey_answer}
      columns={COLUMNS}
      filters={FILTERS}
      rowKey={'code'}
      hideCreate
    />
  )
}

const COLUMNS: ListItemProps[] = [
  {
    type: ListItemType.string,
    title: 'survey_answer_survey_name',
    dataIndex: 'survey_name',
    key: 'survey_name'
  },
  {
    type: ListItemType.string,
    title: 'survey_answer_user_name',
    dataIndex: 'user_name',
    key: 'user_name'
  },
  {
    type: ListItemType.date,
    title: 'survey_answer_submit_date',
    dataIndex: 'created_at',
    key: 'created_at',
  },
]


const FILTERS: FilterField[] = [
  {
    label: 'survey_enabled',
    name: 'enabled',
    type: FilterItemType.boolean,
  },
]

export default SurveyAnswerPage