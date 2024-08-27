import styles from './index.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      {'Powered by '}
      <span className={styles.highlight}>
        {'Anonymous'}
      </span>
      <div className={styles.version}>
        {'Version 1.0.0'}
      </div>
    </div>
  )
}

export default Footer