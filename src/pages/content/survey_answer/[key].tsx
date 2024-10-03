import _get from 'lodash/get'
import Detail from "@/components/ui/Detail"
import { DetailItemType } from "@/enums/detail"
import { Entity } from "@/enums/entity"
import { SectionProps } from "@/types/detail"
import { useParams } from "next/navigation"

const SurveyAnswerDetailPage = () => {

  const params = useParams()

  return (
    <Detail
      title={'${ survey_name } (${ user_name })'}
      entity={Entity.survey_answer}
      sections={SECTIONS}
      actions={{ delete: false, update: false }}
      keyData={params.key as string}
    />
  )
}

const SECTIONS: SectionProps[] = [
  {
    title: 'survey_answer_general_information',
    fields: [
      {
        label: 'survey_answer_survey_name',
        name: 'survey_name',
        type: DetailItemType.string,
        disabled: true,
        required: true,
      },
      {
        label: 'survey_answer_user_name',
        name: 'user_name',
        type: DetailItemType.string,
        disabled: true,
        required: true,
      },
      {
        name: 'answers',
        type: DetailItemType.table,
        span: 24,
        options: {
          columns: [
            { label: 'survey_answer_question', name: 'label' },
            { label: 'survey_answer_answer', name: 'value' },
          ]
        }
      }
    ]
  }
]

export default SurveyAnswerDetailPage