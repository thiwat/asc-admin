import { Button } from "antd"
import { ListActionsProps } from "./types"
import { FileTextOutlined } from '@ant-design/icons'
import Link from "next/link"
import { usePathname } from "next/navigation"

const ListActions = ({ rowId, index, onClick }: ListActionsProps) => {

  const pathname = usePathname()

  if (onClick) {
    return (
      <Button icon={<FileTextOutlined />} onClick={() => onClick(index)} />
    )
  }

  return (
    <Link href={`${pathname}/[key]`} as={`${pathname}/${rowId}`}>
      <Button icon={<FileTextOutlined />} />
    </Link>
  )
}

export default ListActions