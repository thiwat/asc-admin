import { t } from "@/utils/translate"
import { TimeStampProps } from "./types"
import styles from './index.module.css'
import { formatDateTime } from "@/utils/date"

const TimeStamp = ({ createdAt, updatedAt }: TimeStampProps) => {
  return (
    <>
      <div className={styles.message}>
        {t('common_create_at', { time: formatDateTime(createdAt) })}
      </div>
      <div className={styles.message}>
        {t('common_update_at', { time: formatDateTime(updatedAt) })}
      </div>
    </>
  )
}

export default TimeStamp