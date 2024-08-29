import Detail from "@/components/ui/Detail"
import { BlogSortBy, CmsBlockButtonType, CmsBlockType } from "@/enums/cms"
import { DetailItemType } from "@/enums/detail"
import { Entity } from "@/enums/entity"
import { ListItemType } from "@/enums/list"
import { SectionProps } from "@/types/detail"
import { t } from "@/utils/translate"
import { useParams } from "next/navigation"

const EventDetail = () => {

  const params = useParams()

  return (
    <Detail
      title={'${ name }'}
      entity={Entity.event}
      sections={SECTIONS}
      keyData={params.key as string}
    />
  )
}

const SECTIONS: SectionProps[] = [
  {
    title: 'event_general_information',
    fields: [
      {
        label: 'event_name',
        name: 'name',
        type: DetailItemType.string,
        required: true,
      },
      {
        label: 'event_code',
        name: 'code',
        type: DetailItemType.string,
        required: true,
      },
      {
        label: 'event_description',
        name: 'description',
        type: DetailItemType.string,
        required: true,
        span: 24
      }
    ]
  },
  {
    title: 'event_event_information',
    fields: [
      {
        label: 'event_event_start_date',
        name: 'event_start_date',
        type: DetailItemType.datetime,
        required: true,
      },
      {
        label: 'event_event_end_date',
        name: 'event_end_date',
        type: DetailItemType.datetime,
        required: true,
      },
      {
        label: 'event_sale_start_date',
        name: 'sale_start_date',
        type: DetailItemType.datetime,
        required: true,
      },
      {
        label: 'event_sale_end_date',
        name: 'sale_end_date',
        type: DetailItemType.datetime,
        required: true,
      },
      {
        label: 'event_number_of_seat',
        name: 'number_of_seat',
        type: DetailItemType.number,
        required: true,
      },
      {
        label: 'event_number_of_sold',
        name: 'number_of_sold',
        type: DetailItemType.number,
        disabled: true
      },
      {
        label: 'event_price',
        name: 'price',
        type: DetailItemType.number,
        required: true
      },
      {
        label: 'event_location',
        name: 'location',
        type: DetailItemType.string,
        required: true,
      },
    ]
  },
  {
    title: 'event_content_information',
    fields: [
      {
        label: 'event_cover',
        name: ['cover', 'url'],
        type: DetailItemType.attachment,
        required: true,
        options: {
          accept: 'image/*'
        }
      },
      {
        label: 'event_detail',
        name: 'detail',
        type: DetailItemType.wysiwyg,
        required: true,
        span: 24
      }
    ]
  }
]

export default EventDetail