import { LanguageItemProps } from "./types"
import styles from './index.module.css'
import useTheme from "@/hooks/useTheme"


const LanguageItem = ({
  name,
  code,
  icon,
  isActive,
  onClick
}: LanguageItemProps) => {

  const { primary_color } = useTheme()

  const className = isActive
    ? `${styles.container} ${styles.active}`
    : styles.container

  const _onClick = () => {
    onClick(code)
  }

  const style: any = {
    '--primary-color': primary_color
  }


  return (
    <div className={className} style={style} onClick={_onClick}>
      <img src={icon} className={styles.icon} />
      <span>
        {`${name} (${code})`}
      </span>
    </div>
  )
}

export default LanguageItem