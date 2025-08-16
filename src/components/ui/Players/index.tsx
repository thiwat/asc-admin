import { Table } from "antd"
import { PlayersProps } from "./types"
import { t } from "@/utils/translate"

const Players = ({
  value,
  onChange
}: PlayersProps) => {

  return (
    <Table
      dataSource={value || []}
      columns={[
        { title: t('player_name'), key: 'name', dataIndex: 'name' },
        { title: t('player_nick_name'), key: 'nickname', dataIndex: 'nickname' }
      ]}
      pagination={false}
    />
  )
}

export default Players