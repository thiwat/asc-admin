import _get from 'lodash/get'
import _has from 'lodash/has'
import { requestCreate, requestDelete, requestDetail, requestUpdate } from "@/apis/client/entity"
import { useBreadcrumbState } from "@/atoms/breadcrumb"
import { ActionMode } from "@/enums/detail"
import { compileTemplate } from "@/utils/template"
import { t } from "@/utils/translate"
import { useRequest } from "ahooks"
import { useEffect, useMemo } from "react"
import { DetailServiceProps } from "./types"
import { message, Form as AntForm } from 'antd'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'
import { Entity } from '@/enums/entity'
import { executeBooleanValue, prepareDataBeforeSave, prepareInitialData } from '@/utils/form'

const useDetail = ({
  badge,
  title,
  entity,
  actions,
  sections,
  customActions,
  keyData
}: DetailServiceProps) => {

  const router = useRouter()
  const pathname = usePathname()
  const [form] = AntForm.useForm()
  const [breadcrumb, setBreadcrumb] = useBreadcrumbState()

  const _setTitle = (data): void => {
    if (title) {
      const compiledTitle = compileTemplate(title, data)
      setBreadcrumb(compiledTitle)
    }
  }

  const getRequest = useRequest(requestDetail, {
    manual: true,
    onSuccess: (r) => {
      _setTitle(r)
    }
  })

  const updateRequest = useRequest(requestUpdate, {
    manual: true,
    onSuccess: (r) => {
      _setTitle(r)
      message.success(t('common_update_success'))
    },
    onError: (e) => {
      message.error(e.message)
    }
  })

  const createRequset = useRequest(requestCreate, {
    manual: true,
    onSuccess: (r) => {
      const path = pathname.replace('/create', '')
      const key = entity === Entity.user
        ? 'user_id'
        : 'code'
      message.success(t('common_create_success'))
      _setTitle(r)
      form.setFieldsValue(prepareInitialData(r, sections))
      router.replace(`${path}/[key]`, `${path}/${_get(r, key)}`)
      getRequest.run({ entity, id: _get(r, key) })
    },
    onError: (e) => {
      message.error(e.message)
    }
  })

  const deleteRequest = useRequest(requestDelete, {
    manual: true,
    onSuccess: (r) => {
      message.success(t('common_delete_success'))
      router.back()
    }
  })

  const onSubmit = async (values) => {
    keyData && keyData !== 'create'
      ? updateRequest.run({
        entity,
        id: keyData,
        data: await prepareDataBeforeSave(values, sections)
      })
      : createRequset.run({
        entity,
        data: await prepareDataBeforeSave(values, sections)
      })
  }

  const badgeData = useMemo(() => {
    if (!badge) return {}
    return {
      label: t(`${badge.prefixTranslate}${_get(getRequest.data, badge.fieldName)}`),
      color: _get(badge.mapColors, _get(getRequest.data, badge.fieldName))
    }
  }, [JSON.stringify(getRequest.data)])

  const initialData = useMemo(() => {
    if (!getRequest.data) return getRequest.data

    return prepareInitialData(getRequest.data, sections)
  }, [getRequest.data])

  const onClickCustomAction = async (key) => {
    try {
      const action = customActions.find(i => i.key === key)
      if (!action) return

      const params = action.params({ values: getRequest.data })
      const res = await action.action(params)
      getRequest.refresh()
      form.setFieldsValue(prepareInitialData(res, sections))
      message.success(t('common_execute_action_success'))
    } catch (e) {
      message.error(e.message)
    }
  }

  const onDelete = () => {
    deleteRequest.run({
      entity,
      id: keyData
    })
  }

  const filteredCustomActions = useMemo(() => {
    if (!getRequest.data) return []

    if (!customActions) return []

    return customActions
      .filter(i => i.conditions({ values: getRequest.data }))

  }, [getRequest.data])

  const compiledActions = useMemo(() => {
    if (!getRequest.data) return {}

    if (!actions) return {}

    return {
      update: _has(actions, 'update') ? executeBooleanValue(actions.update, { values: getRequest.data }) : true,
      delete: _has(actions, 'delete') ? executeBooleanValue(actions.delete, { values: getRequest.data }) : true
    }
  }, [getRequest.data])

  useEffect(() => {
    if (keyData && keyData !== 'create') {
      getRequest.run({
        entity,
        id: keyData
      })
    }
    if (keyData === 'create') {
      setBreadcrumb('Create')
      form.setFieldsValue(prepareInitialData({}, sections))
    }
  }, [])

  return {
    form,
    mode: keyData && keyData !== 'create' ? ActionMode.update : ActionMode.create,
    badgeData,
    actions: compiledActions,
    customActions: filteredCustomActions,
    loading: getRequest.loading,
    data: initialData,
    displayTitle: breadcrumb,
    onDelete,
    onSubmit,
    onClickCustomAction
  }
}

export default useDetail