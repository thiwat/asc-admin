import { requestApprovePayment } from "@/apis/client/payment"
import Detail from "@/components/ui/Detail"
import { ORDER_STATUS_COLORS } from "@/constants/colors"
import { DetailItemType } from "@/enums/detail"
import { Entity } from "@/enums/entity"
import { SectionProps } from "@/types/detail"
import { t } from "@/utils/translate"
import { useParams } from "next/navigation"

const OrderDetail = () => {

  const params = useParams()

  return (
    <Detail
      title={'${ order_no }'}
      entity={Entity.order}
      sections={SECTIONS}
      keyData={params.key as string}
      actions={{ delete: false, update: false }}
      badge={{
        fieldName: 'status',
        mapColors: ORDER_STATUS_COLORS,
        prefixTranslate: 'order_status_'
      }}
      customActions={[
        {
          label: t('order_action_approve'),
          key: 'approved',
          action: requestApprovePayment,
          conditions: ({ values }) => values?.status === 'paid',
          params: ({ values }) => ({
            order_no: values['order_no']
          })
        },
      ]}
    />
  )
}

const SECTIONS: SectionProps[] = [
  {
    title: 'order_general_information',
    fields: [
      {
        label: 'order_user_email',
        name: ['user', 'email'],
        type: DetailItemType.string,
        required: true,
        disabled: true
      },
      {
        label: 'order_user_mobile_no',
        name: ['user', 'mobile_no'],
        type: DetailItemType.string,
        required: true,
        disabled: true
      },
      {
        label: 'order_total_amount',
        name: 'total_amount',
        type: DetailItemType.number,
        required: true,
        disabled: true
      },
      { type: DetailItemType.space },
      {
        label: 'order_slip_url',
        name: 'slip_url',
        type: DetailItemType.attachment,
        required: true,
        disabled: false,
        options: {
          accept: '*'
        }
      },
    ]
  },
  {
    title: 'order_player_information',
    fields: [
      {
        name: ['items', 'players'],
        type: DetailItemType.players,
        span: 24
      }
    ]
  },
  {
    title: 'order_tickets_information',
    fields: [
      {
        name: 'order_no',
        type: DetailItemType.tickets,
        span: 24
      }
    ]
  }
]

export default OrderDetail