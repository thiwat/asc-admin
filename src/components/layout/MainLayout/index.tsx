import { Layout } from 'antd'
import Menu from './Menu'
import Logo from "./Logo"
import { LayoutProps } from "../types"
import Header from './Header'
import Footer from './Footer'
import styles from './index.module.css'

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider theme={'light'}>
        <Logo />
        <Menu />
        <Footer />
      </Layout.Sider>
      <Layout>
        <Header />
        <Layout.Content className={styles.content}>
          {children}
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout