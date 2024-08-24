import { Menu as AntMenu } from 'antd'
import * as Icon from '@ant-design/icons'
import useMenu from '../../../../hooks/useMenu'
import { useMemo } from 'react'
import styles from './index.module.css'

const Menu = () => {

  const { items, selectedKeys, defaultOpenKeys, onClick } = useMenu()

  const menu = useMemo(() => {
    return items.map(i => {
      const MenuIcon = Icon[i.icon]
      return {
        label: i.label,
        key: i.key,
        children: i.children,
        icon: <MenuIcon />
      }
    })
  }, [])

  return (
    <AntMenu
      selectedKeys={selectedKeys}
      defaultOpenKeys={defaultOpenKeys}
      items={menu}
      mode={'inline'}
      onClick={onClick}
      className={styles.container}
    />
  )
}

export default Menu