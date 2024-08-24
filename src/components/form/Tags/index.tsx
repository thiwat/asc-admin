import useTags from "@/services/tags"
import { Select } from "antd"
import { TagsProps } from "./types"

const Tags = ({ entity, value, onChange }: TagsProps) => {

  const { options } = useTags({ entity })

  return (
    <Select
      mode={'tags'}
      value={value}
      onChange={onChange}
      options={options}
    />
  )
}

export default Tags