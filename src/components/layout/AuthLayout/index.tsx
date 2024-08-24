import { LayoutProps } from "../types"
import styles from './index.module.css'

const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.background}>
      <div className={styles.card}>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout