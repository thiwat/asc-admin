import { requestApprovePayment } from "@/apis/client/payment"
import Detail from "@/components/ui/Detail"
import { ORDER_STATUS_COLORS } from "@/constants/colors"
import { ActionMode, DetailItemType } from "@/enums/detail"
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
        label: 'order_order_no',
        name: 'order_no',
        type: DetailItemType.string,
        required: true,
        disabled: true
      },
      {
        label: 'order_user_name',
        name: 'user_name',
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
      {
        label: 'order_quantity',
        name: 'quantity',
        type: DetailItemType.number,
        required: true,
        disabled: true
      },
      {
        label: 'order_slip_url',
        name: 'slip_url',
        type: DetailItemType.attachment,
        required: true,
        disabled: true,
        options: {
          accept: '*'
        }
      },
    ]
  },
]

export default OrderDetail