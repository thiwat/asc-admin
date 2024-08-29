import Detail from "@/components/ui/Detail"
import { CmsBlockType } from "@/enums/cms"
import { DetailItemType } from "@/enums/detail"
import { Entity } from "@/enums/entity"
import { SectionProps } from "@/types/detail"
import { t } from "@/utils/translate"
import { useParams } from "next/navigation"

const CmsBlockDetail = () => {

  const params = useParams()

  return (
    <Detail
      title={'${ name }'}
      entity={Entity.cms_block}
      sections={SECTIONS}
      keyData={params.key as string}
    />
  )
}

const SECTIONS: SectionProps[] = [
  {
    title: 'cms_block_general_information',
    fields: [
      {
        label: 'cms_block_enabled',
        name: 'enabled',
        type: DetailItemType.boolean,
        required: true,
      },
      {
        type: DetailItemType.space,
        span: 24
      },
      {
        label: 'cms_block_name',
        name: 'name',
        type: DetailItemType.string,
        required: true,
      },
      {
        label: 'cms_block_code',
        name: 'code',
        type: DetailItemType.string,
        required: true,
      },
      {
        label: 'cms_block_description',
        name: 'description',
        type: DetailItemType.string,
        required: true,
        span: 24
      }
    ]
  },
  {
    title: 'cms_block_content_information',
    fields: [
      {
        label: 'cms_block_type',
        name: 'type',
        type: DetailItemType.select,
        required: true,
        options: {
          options: Object.values(CmsBlockType).map(i => ({
            label: t(`cms_block_type_${i}`),
            value: i
          }))
        }
      },
      {
        type: DetailItemType.space
      },
      {
        label: 'cms_block_html',
        name: ['content', 'html'],
        type: DetailItemType.wysiwyg,
        dependenciesFields: ['type'],
        hidden: ({ values }) => values?.type !== CmsBlockType.html,
        required: ({ values }) => values?.type === CmsBlockType.html,
        span: 24
      },
    ]
  }
]

export default CmsBlockDetail