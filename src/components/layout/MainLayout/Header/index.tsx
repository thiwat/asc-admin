import useBreadcrumb from '@/hooks/useBreadcrumb'
import { Layout, Typography } from 'antd'
import Profile from '../Profile'
import styles from './index.module.css'
import Notification from '../Notification'

const Header = () => {

  const { activeItem } = useBreadcrumb()

  return (
    <Layout.Header className={styles.header}>
      <Typography.Text className={styles.activeBreadcrumb}>
        {activeItem}
      </Typography.Text>
      <span className={styles.rightContainer}>
        <Notification />
        <Profile />
      </span>
    </Layout.Header>
  )
}

export default Header