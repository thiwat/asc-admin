import { BellOutlined } from '@ant-design/icons'
import Link from 'next/link'
import styles from './index.module.css'

const Notification = () => {
  return (
    <Link href={'/notification'}>
      <div className={styles.container}>
        <BellOutlined className={styles.icon} />
        <div className={styles.badge} />
      </div>
    </Link>
  )
}

export default Notification