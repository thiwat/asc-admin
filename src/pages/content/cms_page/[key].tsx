import Detail from "@/components/ui/Detail"
import { DetailItemType } from "@/enums/detail"
import { Entity } from "@/enums/entity"
import { ListItemType } from "@/enums/list"
import { SectionProps } from "@/types/detail"
import { useParams } from "next/navigation"

const CmsPageDetail = () => {

  const params = useParams()

  return (
    <Detail
      title={'${ name }'}
      entity={Entity.cms_page}
      sections={SECTIONS}
      keyData={params.key as string}
    />
  )
}

const SECTIONS: SectionProps[] = [
  {
    title: 'cms_page_general_information',
    fields: [
      {
        label: 'cms_page_enabled',
        name: 'enabled',
        type: DetailItemType.boolean,
        required: true,
      },
      {
        type: DetailItemType.space,
        span: 24
      },
      {
        label: 'cms_page_name',
        name: 'name',
        type: DetailItemType.string,
        required: true,
      },
      {
        label: 'cms_page_code',
        name: 'code',
        type: DetailItemType.string,
        required: true,
      },
      {
        label: 'cms_page_description',
        name: 'description',
        type: DetailItemType.string,
        required: true,
        span: 24
      }
    ]
  },
  {
    title: 'cms_page_content_information',
    fields: [
      {
        label: 'cms_page_blocks',
        name: 'blocks',
        required: true,
        type: DetailItemType.addable,
        dependenciesFields: ['type'],
        options: {
          allowDrag: true,
          listLayout: [
            {
              type: ListItemType.string,
              title: 'cms_page_block_code',
              dataIndex: 'code',
              key: 'code'
            }
          ],
          detailLayout: [
            {
              fields: [
                {
                  label: 'cms_page_block_code',
                  name: 'code',
                  type: DetailItemType.select,
                  required: true,
                  options: {
                    entity: Entity.cms_block,
                    label: '${ name }',
                    value: '${ code }'
                  }
                },
              ]
            }
          ]
        },
        span: 24
      }
    ]
  },
  {
    title: 'cms_page_meta_data_information',
    fields: [
      {
        label: 'cms_page_meta_data_title',
        name: ['meta_data', 'title'],
        type: DetailItemType.string,
      },
      {
        label: 'cms_page_meta_data_description',
        name: ['meta_data', 'description'],
        type: DetailItemType.string,
      },
      {
        label: 'cms_page_meta_data_keyword',
        name: ['meta_data', 'keyword'],
        type: DetailItemType.string,
      }
    ]
  }
]

export default CmsPageDetail