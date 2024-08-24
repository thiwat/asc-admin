import { ColorPicker as AntColorPicker } from 'antd'
import { ColorPickerProps } from './types'

const ColorPicker = ({
  value,
  disabled,
  onChange
}: ColorPickerProps) => {

  const _onChange = (value: unknown, hex: string) => {
    onChange(hex)
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