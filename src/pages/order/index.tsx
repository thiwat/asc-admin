import List from "@/components/ui/List"
import { ORDER_STATUS_COLORS } from "@/constants/colors"
import { Entity } from "@/enums/entity"
import { ListItemType } from "@/enums/list"
import { ListItemProps } from "@/types/list"

const OrderPage = () => {
  return (
    <List
      entity={Entity.order}
      columns={COLUMNS}
      rowKey={'order_no'}
    />
  )
}

const COLUMNS: ListItemProps[] = [
  {
    type: ListItemType.string,
    title: 'order_order_no',
    dataIndex: 'order_no',
    key: 'order_no'
  },
  {
    type: ListItemType.string,
    title: 'order_user_name',
    dataIndex: 'user_name',
    key: 'user_name'
  },
  {
    type: ListItemType.number,
    title: 'order_total_amount',
    dataIndex: 'total_amount',
    key: 'total_amount'
  },
  {
    type: ListItemType.badge,
    title: 'order_status',
    dataIndex: 'status',
    key: 'status',
    options: {
      mapColors: ORDER_STATUS_COLORS,
      prefixTranslate: 'order_status_'
    }
  },
  {
    type: ListItemType.date,
    title: 'order_order_date',
    dataIndex: 'created_at',
    key: 'created_at'
  },
]

export default OrderPage