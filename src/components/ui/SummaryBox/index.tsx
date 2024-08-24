import { SummaryBoxProps } from "./types"
import styles from './index.module.css'
import { Typography } from "antd"

const SummaryBox = ({ icon, color, title, value }: SummaryBoxProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.badge} style={{ backgroundColor: color }}>
        {icon}
      </div>
      <div className={styles.valueContainer}>
        <Typography.Title level={2} className={styles.value}>
          {value}
        </Typography.Title>
        <Typography.Text type={'secondary'}>
          {title}
        </Typography.Text>
      </div>
    </div>
  )
}

export default SummaryBox