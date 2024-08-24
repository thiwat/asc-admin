import _get from 'lodash/get'
import _isEmpty from 'lodash/isEmpty'
import { requestList } from "@/apis/client/entity"
import { prepareListColumns } from "@/utils/list"
import { useRequest } from "ahooks"
import { Table } from "antd"
import { useState } from "react"
import { AdvanceTableProps } from "./types"
import { ActionMode } from '@/enums/detail'
import FormModal from '@/components/form/FormModal'

const AdvanceTable = ({
  entity,
  filters,
  rowKey,
  detailLayout,
  listLayout,
}: AdvanceTableProps) => {

  const [item, setItem] = useState<any>(null)

  const onEdit = (index: number) => {
    setItem(_get(data, `rows.${index}`))
  }

  const onClose = () => {
    setItem(null)
  }

  const { data, loading } = useRequest(requestList, {
    defaultParams: [{
      entity,
      filter: filters,
      page: 1,
      page_size: 100,
      sort: '-version'
    }]
  })

  if (loading) return null

  return (
    <>
      <Table
        rowKey={rowKey || 'key'}
        dataSource={data?.['rows'] || []}
        columns={prepareListColumns(listLayout, rowKey || 'key', false, onEdit)}
        pagination={false}
      />
      <FormModal
        name={'advance-form-modal'}
        title={'Detail'}
        open={!_isEmpty(item)}
        mode={ActionMode.update}
        data={item}
        onClose={onClose}
        sections={detailLayout}
      />
    </>
  )
}

export default AdvanceTable