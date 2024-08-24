import Image from 'next/image'
import styles from './index.module.css'

const Logo = () => {
  return (
    <div className={styles.container}>
      <Image
        src={'/images/logo.png'}
        priority={true}
        height={40}
        width={150}
        style={{
          margin: 'auto',
          objectFit: 'contain'
        }}
        alt={'logo'}
      />
    </div>
  )
}

export default Logo