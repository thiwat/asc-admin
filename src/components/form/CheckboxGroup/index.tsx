import { CheckboxGroupProps } from "./types"
import styles from './index.module.css'
import { t } from "@/utils/translate"
import { PRIMARY_COLOR } from "@/constants/colors"

const style: any = {
  '--primary-color': PRIMARY_COLOR
}

const CheckboxGroup = ({
  value = [],
  options,
  onChange
}: CheckboxGroupProps) => {

  const _getClassName = (key: string): string => {
    return value.includes(key)
      ? `${styles.item} ${styles.active}`
      : styles.item
  }

  const _onChange = (key: string) => () => {
    const newValue = value.includes(key)
      ? value.filter(i => i !== key)
      : [...value, key]
    onChange(newValue)
  }

  return (
    <div className={styles.container}>
      {options.map(i => (
        <div
          onClick={_onChange(i.value)}
          key={i.value}
          className={_getClassName(i.value)}
          style={style}
        >
          {t(i.label)}
        </div>
      ))}
    </div>
  )
}

export default CheckboxGroup