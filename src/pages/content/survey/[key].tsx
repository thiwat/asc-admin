import _get from 'lodash/get'
import Detail from "@/components/ui/Detail"
import { DetailItemType } from "@/enums/detail"
import { Entity } from "@/enums/entity"
import { ListItemType } from "@/enums/list"
import { SectionProps } from "@/types/detail"
import { useParams } from "next/navigation"

const SurveyDetailPage = () => {

  const params = useParams()

  return (
    <Detail
      title={'${ name }'}
      entity={Entity.survey}
      sections={SECTIONS}
      keyData={params.key as string}
    />
  )
}

const SECTIONS: SectionProps[] = [
  {
    title: 'survey_general_information',
    fields: [
      {
        label: 'survey_enabled',
        name: 'enabled',
        type: DetailItemType.boolean,
        required: true,
      },
      {
        type: DetailItemType.space,
        span: 24
      },
      {
        label: 'survey_name',
        name: 'name',
        type: DetailItemType.string,
        required: true,
      },
      {
        label: 'survey_code',
        name: 'code',
        type: DetailItemType.string,
        required: true,
      },
      {
        label: 'survey_description',
        name: 'description',
        type: DetailItemType.string,
        required: true,
        span: 24
      }
    ]
  },
  {
    title: 'survey_question_information',
    fields: [
      {
        label: 'survey_questions',
        name: 'questions',
        type: DetailItemType.addable,
        span: 24,
        required: true,
        options: {
          allowDrag: true,
          listLayout: [
            {
              type: ListItemType.string,
              title: 'survey_question_label',
              dataIndex: 'label',
              key: 'label'
            },
            {
              type: ListItemType.string,
              title: 'survey_question_code',
              dataIndex: 'code',
              key: 'code'
            },
            {
              type: ListItemType.string,
              title: 'survey_question_type',
              dataIndex: 'type',
              key: 'type'
            },
            {
              type: ListItemType.boolean,
              title: 'survey_question_required',
              dataIndex: 'required',
              key: 'required'
            }
          ],
          detailLayout: [
            {
              fields: [
                {
                  label: 'survey_question_label',
                  name: 'label',
                  type: DetailItemType.string,
                  required: true
                },
                {
                  label: 'survey_question_code',
                  name: 'code',
                  type: DetailItemType.string,
                  required: true
                },
                {
                  label: 'survey_question_placeholder',
                  name: 'placeholder',
                  type: DetailItemType.string,
                },
                {
                  label: 'survey_question_description',
                  name: 'description',
                  type: DetailItemType.string,
                },
                {
                  label: 'survey_question_required',
                  name: 'required',
                  type: DetailItemType.boolean,
                },
                {
                  label: 'survey_question_span',
                  name: 'span',
                  type: DetailItemType.number,
                },
                {
                  label: 'survey_question_type',
                  name: 'type',
                  type: DetailItemType.select,
                  required: true,
                  options: {
                    options: [
                      { label: 'survey_question_type_string', value: 'string' },
                      { label: 'survey_question_type_textarea', value: 'textarea' },
                      { label: 'survey_question_type_radio', value: 'radio' },
                    ]
                  }
                },
                {
                  label: 'survey_question_validate',
                  name: 'validate',
                  type: DetailItemType.select,
                  dependenciesFields: ['type'],
                  hidden: ({ values }) => _get(values, 'type') !== 'string',
                  options: {
                    options: [
                      { label: 'survey_question_validate_phone_number', value: 'phone_number' },
                      { label: 'survey_question_validate_email', value: 'email' },
                      { label: 'survey_question_validate_thai', value: 'thai' },
                    ]
                  }
                },
                {
                  label: 'survey_question_options',
                  name: 'options',
                  span: 24,
                  type: DetailItemType.editable,
                  dependenciesFields: ['type'],
                  required: ({ values }) => _get(values, 'type') === 'radio',
                  hidden: ({ values }) => _get(values, 'type') !== 'radio',
                  options: {
                    columns: [
                      { label: 'survey_question_option_label', name: 'label' },
                      { label: 'survey_question_option_value', name: 'value' },
                    ]
                  }
                }
              ]
            }
          ]
        }
      },

    ]
  },
  {
    title: 'survey_content_information',
    fields: [
      {
        label: 'survey_title',
        name: 'title',
        type: DetailItemType.string,
        required: true,
      },
      {
        label: 'survey_send_email',
        name: 'send_email',
        type: DetailItemType.boolean,
        required: true,
      },
      {
        label: 'survey_header_content',
        name: 'header_content',
        type: DetailItemType.wysiwyg,
        span: 24,
        required: true,
      },
      {
        label: 'survey_thankyou_page',
        name: 'thankyou_page',
        type: DetailItemType.wysiwyg,
        span: 24,
        required: true
      }
    ]
  }
]

export default SurveyDetailPage