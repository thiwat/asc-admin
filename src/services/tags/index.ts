import { requestEntityTags } from "@/apis/client/entity"
import { useRequest } from "ahooks"
import { TagsServiceProps } from "./types"

const useTags = ({ entity }: TagsServiceProps) => {

  const requestGet = useRequest(requestEntityTags, {
    defaultParams: [{ entity }]
  })

  return {
    options: (requestGet?.data?.['tags'] || [])
      .map(i => ({ label: i, value: i }))
  }
}

export default useTags