import { RadioGroupProps } from "./types"
import styles from './index.module.css'
import { t } from "@/utils/translate"
import { PRIMARY_COLOR } from "@/constants/colors"

const style: any = {
  '--primary-color': PRIMARY_COLOR
}

const OPTIONS = [
  { label: 'common_yes', value: true },
  { label: 'common_no', value: false },
]

const RadioGroup = ({
  value,
  onChange
}: RadioGroupProps) => {

  const _getClassName = (item: any): string => {
    return value === item
      ? `${styles.item} ${styles.active}`
      : styles.item
  }

  const _onChange = (value: any) => () => {
    onChange(value)
  }

  return (
    <div className={styles.container}>
      {OPTIONS.map(i => (
        <div
          onClick={_onChange(i.value)}
          key={i.label}
          className={_getClassName(i.value)}
          style={style}
        >
          {t(i.label)}
        </div>
      ))}
    </div>
  )
}

export default RadioGroup