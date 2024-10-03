import { t } from '@/utils/translate'
import { Table as AntTable } from 'antd'
import { TableProps } from './types'

const Table = ({
  value,
  expanable,
  columns
}: TableProps) => {

  return (
    <AntTable
      dataSource={(value || []).map((i, index) => ({
        ...i,
        index
      }))}
      rowKey={'index'}
      columns={columns.map(i => ({
        title: t(i.label),
        dataIndex: i.name,
        key: i.name
      }))}
      pagination={false}
      expandable={expanable?.key
        ? {
          expandedRowRender: (record) => {
            return (
              <div style={{ padding: '0px 10px' }}>
                <AntTable
                  rowKey={'id'}
                  dataSource={record[expanable.key] || []}
                  columns={expanable.columns.map(i => ({
                    title: t(i.label),
                    dataIndex: i.name,
                    key: i.name
                  }))}
                />
              </div>
            )
          }
        }
        : null
      }
    />
  )
}

export default Table