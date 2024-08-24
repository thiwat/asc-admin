import _isEmpty from 'lodash/isEmpty'
import { Button, Dropdown } from "antd";
import { CustomActionsProps } from "./types";
import { MoreOutlined } from '@ant-design/icons'
import { ActionMode } from "@/enums/detail";

const CustomActions = ({ mode, actions, onClick }: CustomActionsProps) => {

  const _onClick = ({ key }) => {
    onClick(key)
  }

  if (mode === ActionMode.create) return null

  if (_isEmpty(actions)) return null

  return (
    <Dropdown
      menu={{
        items: actions.map(i => ({
          label: i.label,
          key: i.key
        })),
        onClick: _onClick
      }}
      placement={'bottomRight'}
    >
      <Button icon={<MoreOutlined />} />
    </Dropdown>
  )
}

export default CustomActions