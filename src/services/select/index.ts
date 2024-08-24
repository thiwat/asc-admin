import _template from 'lodash/template'
import { requestList } from "@/apis/client/entity"
import { useEffect, useState } from "react"
import { SelectServiceProps } from "./types"
import { useRequest } from 'ahooks'

const useSelect = ({
  entity,
  label,
  value,
  filters,
  ...props
}: SelectServiceProps) => {

  const [options, setOptions] = useState(() => {
    if (entity) return []
    return props.options
  })

  const getRequest = useRequest(requestList, {
    manual: true,
    onSuccess: (r) => {
      setOptions(r['rows']?.map(i => ({
        label: _template(label)(i),
        value: _template(value)(i)
      })) || [])
    }
  })

  useEffect(() => {

    if (entity) {
      _fetchEntityOptions()
    }
  }, [entity])

  const _fetchEntityOptions = () => {
    getRequest.run({
      entity,
      page: 1,
      page_size: 100,
      filter: filters
    })
  }

  return {
    options,
    loading: entity ? getRequest.loading : false
  }
}

export default useSelect