import useProfile from "@/services/profile"
import { t } from "@/utils/translate"
import { Dropdown } from "antd"
import Image from "next/image"
import styles from './index.module.css'

const Profile = () => {

  const {
    profile,
    onLogout
  } = useProfile()

  return (
    <Dropdown
      trigger={['click']}
      placement={'bottomRight'}
      menu={{
        items: [
          { key: 'logout', label: t('common_logout'), onClick: onLogout }

        ]
      }}
    >
      <div className={styles.container}>
        <Image
          alt={'profile'}
          width={35}
          height={35}
          src={'/images/default-profile.png'}
        />
        <span className={styles.rightContainer}>
          <span className={styles.name}>
            {`Hi, ${profile.first_name}`}
          </span>
          <span className={styles.role}>
            {t(`role_${profile.role}`)}
          </span>
        </span>
      </div>
    </Dropdown>
  )
}

export default Profile