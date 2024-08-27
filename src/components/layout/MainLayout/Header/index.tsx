import useBreadcrumb from '@/hooks/useBreadcrumb'
import { Layout, Typography } from 'antd'
import styles from './index.module.css'
import Profile from '../Profile'

const Header = () => {

  const { activeItem } = useBreadcrumb()

  return (
    <Layout.Header className={styles.header}>
      <Typography.Text className={styles.activeBreadcrumb}>
        {activeItem}
      </Typography.Text>
      <span className={styles.rightContainer}>
        <Profile />
      </span>
    </Layout.Header>
  )
}

export default Header