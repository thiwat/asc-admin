import useSelect from '@/services/select'
import { t } from '@/utils/translate'
import { Select as AntSelect } from 'antd'
import { SelectProps } from './types'

const Select = ({ disabled, value, onChange, ...props }: SelectProps) => {

  const {
    loading,
    options
  } = useSelect(props.options)

  return (
    <AntSelect
      value={value}
      loading={loading}
      disabled={disabled}
      mode={props.options.mode ? props.options.mode : undefined}
      onChange={onChange}
      options={options?.map(i => ({
        label: t(i.label),
        value: i.value
      }))}
    />
  )
}

export default Select