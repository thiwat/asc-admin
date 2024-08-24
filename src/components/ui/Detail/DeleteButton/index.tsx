import _isEmpty from 'lodash/isEmpty'
import { ActionMode } from "@/enums/detail"
import { Button, Popconfirm } from "antd"
import { DeleteButtonProps } from "./types"
import { DeleteOutlined } from '@ant-design/icons'
import { t } from "@/utils/translate"

const DeleteButton = ({ actions, mode, onClick }: DeleteButtonProps) => {

  if (mode === ActionMode.create) return null

  if (!_isEmpty(actions) && !actions.delete) return null

  return (
    <Popconfirm
      title={t('common_delete_title')}
      description={t('common_delete_description')}
      placement={'bottomRight'}
      onConfirm={onClick}
    >
      <Button danger icon={<DeleteOutlined />} />
    </Popconfirm>
  )
}

export default DeleteButton