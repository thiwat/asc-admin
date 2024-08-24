import { Button, Row, Space, Table } from "antd"
import { ReloadOutlined } from '@ant-design/icons'
import { t } from "@/utils/translate"
import { ListModalProps } from "./types"
import styles from './index.module.css'
import useListModal from "@/services/list_modal"
import FormModal from "@/components/form/FormModal"

const ListModal = (props: ListModalProps) => {

  const {
    item,
    data,
    columns,
    mode,
    loading,
    pagination,
    isModalOpen,
    onToggleModal,
    onRefresh,
    onCreate,
    onSubmit,
    onDelete,
    onChangePage
  } = useListModal(props)

  return (
    <>
      <Row align={'middle'} className={styles.header}>
        <Space className={styles.rightActions}>
          <Button
            icon={<ReloadOutlined />}
            onClick={onRefresh}
          />
          <Button type={'primary'} onClick={onCreate}>
            {t('common_table_create_button')}
          </Button>
        </Space>
      </Row>
      <FormModal
        name={'master_data'}
        title={t('master_data')}
        data={item}
        mode={mode}
        open={isModalOpen}
        sections={props.sections}
        onClose={onToggleModal}
        onSubmit={onSubmit}
        onDelete={onDelete}
      />
      <Table
        loading={loading}
        rowKey={'value'}
        dataSource={data}
        columns={columns}
        pagination={pagination}
        onChange={onChangePage}
      />
    </>
  )
}

export default ListModal