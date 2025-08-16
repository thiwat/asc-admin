import { useRequest } from "ahooks"
import { TicketsProps } from "./types"
import { requestListTickets } from "@/apis/client/order"
import { Table } from "antd"
import { t } from "@/utils/translate"
import TicketModal from "./Modal"

const Tickets = ({
  value,
}: TicketsProps) => {

  const listRequest = useRequest(requestListTickets, {
    defaultParams: [{ order_no: value }]
  })

  return (
    <Table
      dataSource={listRequest?.data || []}
      columns={[
        { title: t('ticket_code'), key: 'code', dataIndex: 'code' },
        { title: t('ticket_status'), key: 'status', dataIndex: 'status' },
        {
          key: 'id',
          dataIndex: 'id',
          width: 50,
          render: (value, row) => {
            return (
              <TicketModal data={row} />
            )
          }
        }
      ]}
      pagination={false}
    />
  )
}

export default Tickets