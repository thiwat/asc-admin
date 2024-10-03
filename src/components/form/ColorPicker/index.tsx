import { ColorPicker as AntColorPicker } from 'antd'
import { ColorPickerProps } from './types'

const ColorPicker = ({
  value,
  disabled,
  onChange
}: ColorPickerProps) => {

  const _onChange = (value: any, hex: string, ...props) => {
    onChange(value.toHexString())
  }

  return (
    <AntColorPicker
      disabled={disabled}
      format={'hex'}
      onChange={_onChange}
      value={value}
      showText
    />
  )
}

export default ColorPicker