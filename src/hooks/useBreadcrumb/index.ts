import { MENU } from "@/constants/menu"
import { t } from "@/utils/translate"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { useBreadcrumbStateValue } from '@/atoms/breadcrumb'

const useBreadcrumb = () => {

  const router = useRouter()
  const breadcrumb = useBreadcrumbStateValue()

  const _getMenuFromPath = (items: any, path: string): any => {
    for (const menu of items) {
      if (menu.key === path) {
        return t(menu.label)
      }

      if (menu.children) {
        const match = _getMenuFromPath(menu.children, path)
        if (match) return match
      }
    }
    return ''
  }

  const activeItem: string = useMemo<string>(() => {
    const res = _getMenuFromPath(MENU, router.pathname)
    if (res) return res

    const [last] = router.pathname.split('/').slice(-1)
    if (last.startsWith('[') && last.endsWith(']')) {
      return breadcrumb
    }

    return undefined

  }, [router.asPath, breadcrumb])

  return {
    activeItem
  }
}

export default useBreadcrumb