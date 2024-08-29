import List from "@/components/ui/List"
import { Entity } from "@/enums/entity"
import { ListItemType } from "@/enums/list"
import { ListItemProps } from "@/types/list"

const EventPage = () => {
  return (
    <List
      entity={Entity.event}
      columns={COLUMNS}
      rowKey={'code'}
    />
  )
}

const COLUMNS: ListItemProps[] = [
  {
    type: ListItemType.image,
    title: '',
    dataIndex: 'cover.url',
    key: 'cover.url',
    sorter: false
  },
  {
    type: ListItemType.string,
    title: 'event_name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    type: ListItemType.string,
    title: 'event_code',
    dataIndex: 'code',
    key: 'code',
  },
  {
    type: ListItemType.string,
    title: 'event_number_of_seat',
    dataIndex: 'number_of_seat',
    key: 'number_of_seat',
  },
  {
    type: ListItemType.string,
    title: 'event_number_of_sold',
    dataIndex: 'number_of_sold',
    key: 'number_of_sold',
  },
  {
    type: ListItemType.date,
    title: 'event_event_start_date',
    dataIndex: 'event_start_date',
    key: 'event_start_date'
  },
  {
    type: ListItemType.date,
    title: 'event_event_end_date',
    dataIndex: 'event_end_date',
    key: 'event_end_date'
  },
  {
    type: ListItemType.date,
    title: 'event_last_update',
    dataIndex: 'updated_at',
    key: 'updated_at'
  },
]

export default EventPage