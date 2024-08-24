import _reduce from 'lodash/reduce'
import _isEmpty from 'lodash/isEmpty'
import _isArray from 'lodash/isArray'
import _isBoolean from 'lodash/isBoolean'
import { FilterProps } from "@/components/ui/List/Filters/types"
import { useEffect, useState } from "react"
import { Form } from 'antd'

const useFilter = ({
  fields,
  value,
  onChange
}: FilterProps) => {

  const [open, setOpen] = useState<boolean>(false)
  const [form] = Form.useForm()

  useEffect(() => {
    if (open) {
      _isEmpty(value)
        ? form.setFieldsValue(_reduce(fields, (r, i) => {
          r[i.name] = undefined
          return r
        }, {}))
        : form.setFieldsValue(value)
    }
  }, [open])

  const toggleOpen = () => {
    setOpen(prev => !prev)
  }

  const checkShowBadge = () => {
    if (_isEmpty(value)) return false
    for (const key in value) {
      if (_isArray(value[key]) && !_isEmpty(value[key])) {
        return true
      }
      if (_isBoolean(value[key])) {
        return true
      }
    }
    return false
  }

  const onClearAll = () => {
    onChange({})
    toggleOpen()
  }

  const onSubmit = () => {
    const values = form.getFieldsValue()
    onChange(values)
    toggleOpen()
  }

  return {
    open,
    form,
    showBadge: checkShowBadge(),
    toggleOpen,
    onSubmit,
    onClearAll
  }
}

export default useFilter