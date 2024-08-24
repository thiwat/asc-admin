import { requestGetSetting, requestSetSetting } from "@/apis/client/setting"
import { prepareInitialData, prepareDataBeforeSave } from "@/utils/form"
import { t } from "@/utils/translate"
import { useRequest } from "ahooks"
import { message } from 'antd'
import { useMemo } from "react"
import { SettingServiceProps } from "./types"

const useSetting = ({ name, sections }: SettingServiceProps) => {

  const getSettingRequest = useRequest(requestGetSetting, {
    defaultParams: [{ name }]
  })

  const setSettingRequest = useRequest(requestSetSetting, {
    manual: true,
    loadingDelay: 500,
    onSuccess: (r) => {
      message.success({ content: t('common_save_setting_success') })
    },
    onError: (e) => {
      message.error({ content: e.message })
    }
  })

  const initialData = useMemo(() => {
    if (!getSettingRequest.data) return getSettingRequest.data

    return prepareInitialData(getSettingRequest.data, sections)

  }, [getSettingRequest.data])

  const onSave = async (data) => {
    setSettingRequest.run({
      name,
      data: await prepareDataBeforeSave(data, sections)
    })
  }

  return {
    data: initialData,
    loading: getSettingRequest.loading,
    isSaving: setSettingRequest.loading,
    onSave
  }
}

export default useSetting