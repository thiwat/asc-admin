import Detail from "@/components/ui/Detail"
import { BlogSortBy, CmsBlockButtonType, CmsBlockType } from "@/enums/cms"
import { DetailItemType } from "@/enums/detail"
import { Entity } from "@/enums/entity"
import { ListItemType } from "@/enums/list"
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
        label: 'cms_block_title',
        name: ['content', 'title'],
        type: DetailItemType.string,
        dependenciesFields: ['type'],
        hidden: ({ values }) => ![CmsBlockType.blog, CmsBlockType.items].includes(values?.type),
        required: ({ values }) => [CmsBlockType.blog, CmsBlockType.items].includes(values?.type),
      },
      {
        label: 'cms_block_subtitle',
        name: ['content', 'subtitle'],
        type: DetailItemType.string,
        dependenciesFields: ['type'],
        hidden: ({ values }) => ![CmsBlockType.blog, CmsBlockType.items].includes(values?.type),
        required: ({ values }) => [CmsBlockType.blog, CmsBlockType.items].includes(values?.type),
      },
      {
        label: 'cms_block_sort_by',
        name: ['content', 'sort_by'],
        type: DetailItemType.select,
        dependenciesFields: ['type'],
        hidden: ({ values }) => values?.type !== CmsBlockType.blog,
        required: ({ values }) => values?.type === CmsBlockType.blog,
        options: {
          options: Object.values(BlogSortBy).map(i => ({
            label: t(`cms_block_sort_by_${i}`),
            value: i
          }))
        }
      },
      {
        label: 'cms_block_tags',
        name: ['content', 'tags'],
        type: DetailItemType.tags,
        dependenciesFields: ['type'],
        hidden: ({ values }) => values?.type !== CmsBlockType.blog,
        options: {
          entity: Entity.blog
        }
      },
      {
        label: 'cms_block_image',
        name: ['content', 'image', 'url'],
        type: DetailItemType.attachment,
        dependenciesFields: ['type'],
        hidden: ({ values }) => values?.type !== CmsBlockType.image,
        required: ({ values }) => values?.type === CmsBlockType.image,
        options: {
          path: 'cms_block',
          accept: 'image/*'
        }
      },
      {
        label: 'cms_block_max_width',
        name: ['content', 'max_width'],
        type: DetailItemType.string,
        dependenciesFields: ['type'],
        hidden: ({ values }) => values?.type !== CmsBlockType.image,
      },
      {
        label: 'cms_block_button_type',
        name: ['content', 'button_type'],
        type: DetailItemType.select,
        dependenciesFields: ['type'],
        required: ({ values }) => values?.type === CmsBlockType.button,
        hidden: ({ values }) => values?.type !== CmsBlockType.button,
        options: {
          options: Object.values(CmsBlockButtonType).map(i => ({
            label: t(`cms_block_button_type_${i}`),
            value: i
          }))
        }
      },
      {
        label: 'cms_block_label',
        name: ['content', 'label'],
        type: DetailItemType.string,
        dependenciesFields: ['type'],
        required: ({ values }) => values?.type === CmsBlockType.button,
        hidden: ({ values }) => values?.type !== CmsBlockType.button,
      },
      {
        label: 'cms_block_href',
        name: ['content', 'href'],
        type: DetailItemType.string,
        dependenciesFields: ['type'],
        required: ({ values }) => values?.type === CmsBlockType.button,
        hidden: ({ values }) => values?.type !== CmsBlockType.button,
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
      {
        label: 'cms_block_autoplay',
        name: ['content', 'autoplay'],
        type: DetailItemType.boolean,
        hidden: ({ values }) => values?.type !== CmsBlockType.carousel,
      },
      {
        label: 'cms_block_images',
        name: ['content', 'images'],
        type: DetailItemType.addable,
        dependenciesFields: ['type'],
        hidden: ({ values }) => values?.type !== CmsBlockType.carousel,
        required: ({ values }) => values?.type === CmsBlockType.carousel,
        options: {
          allowDrag: true,
          listLayout: [
            {
              type: ListItemType.image,
              title: 'cms_block_image',
              dataIndex: 'url',
              key: 'url'
            }
          ],
          detailLayout: [
            {
              fields: [
                {
                  label: 'cms_block_image',
                  name: 'url',
                  type: DetailItemType.attachment,
                  dependenciesFields: ['type'],
                  required: true,
                  options: {
                    path: 'cms_block',
                    accept: 'image/*'
                  }
                },
              ]
            }
          ]
        },
        span: 24
      },
      {
        label: 'cms_block_items',
        name: ['content', 'items'],
        type: DetailItemType.addable,
        dependenciesFields: ['type'],
        hidden: ({ values }) => values?.type !== CmsBlockType.items,
        required: ({ values }) => values?.type === CmsBlockType.items,
        options: {
          allowDrag: true,
          listLayout: [
            {
              type: ListItemType.image,
              title: 'cms_block_image',
              dataIndex: 'url',
              key: 'url'
            },
            {
              type: ListItemType.string,
              title: 'cms_block_title',
              dataIndex: 'title',
              key: 'title'
            }
          ],
          detailLayout: [
            {
              fields: [
                {
                  label: 'cms_block_title',
                  name: 'title',
                  type: DetailItemType.string,
                  required: true,
                },
                {
                  label: 'cms_block_subtitle',
                  name: 'subtitle',
                  type: DetailItemType.string,
                  required: true,
                },
                {
                  label: 'cms_block_image',
                  name: 'url',
                  type: DetailItemType.attachment,
                  dependenciesFields: ['type'],
                  required: true,
                  options: {
                    path: 'cms_block',
                    accept: 'image/*'
                  },
                  span: 24
                },
                {
                  label: 'cms_block_html',
                  name: 'html',
                  type: DetailItemType.wysiwyg,
                  required: true,
                  span: 24
                },
              ]
            }
          ]
        },
        span: 24
      }
    ]
  }
]

export default CmsBlockDetail