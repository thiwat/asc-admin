import _isEmpty from 'lodash/isEmpty'
import _cloneDeep from 'lodash/cloneDeep'
import { useProfileStateValue } from "@/atoms/profile"
import { MENU } from "@/constants/menu"
import { t } from "@/utils/translate"
import { useRouter } from "next/router"
import { useMemo } from "react"
import Link from 'next/link'

const useMenu = () => {

  const router = useRouter()
  const profile = useProfileStateValue()

  const items = useMemo(() => {
    return _cloneDeep(MENU)
      .filter(i => i.roles ? i.roles.includes(profile.role) : true)
      .map(i => {
        const item = i
        item.label = _isEmpty(i.children) ? <Link onClick={e => e.preventDefault()} href={i.key}>{t(item.label)}</Link> : t(item.label)
        if (item.children) {
          item.children = item.children
            .filter(i => i.roles ? i.roles.includes(profile.role) : true)
            .map(i => ({
              label: <Link onClick={e => e.preventDefault()} href={i.key}>{t(i.label)}</Link>,
              key: i.key
            }))
          if (_isEmpty(item.children)) return null
        }
        return item
      })
      .filter(i => !!i)
  }, [profile?.role])

  const onClick = ({ key }: { key: string }) => {
    router.push(key)
  }

  const getDefaultSelectedKeys = (): string[] => {
    const lastPath = router.pathname.split('/').at(-1)
    const isDetail = lastPath.startsWith('[') && lastPath.endsWith(']')
    return isDetail
      ? [router.asPath.split('/').slice(0, -1).join('/')]
      : [router.asPath]
  }

  const getDefaultOpenKeys = (): string[] => {
    const paths = router.pathname.split('/')
    if (paths.length < 3) {
      return []
    }
    return [`/${paths[1]}`]
  }

  return {
    items,
    selectedKeys: getDefaultSelectedKeys(),
    defaultOpenKeys: getDefaultOpenKeys(),
    onClick
  }
}

export default useMenu