import { requestGetTranslate, requestSetTranslate } from "@/apis/client/setting"
import { t } from "@/utils/translate"
import { useRequest } from "ahooks"
import { Button, message } from "antd"
import { useEffect, useState } from "react"
import { TranslateSectionProps } from "./types"
import styles from './index.module.css'
import Editor from "@/components/form/Editor"

const TranslateSection = ({
  locale,
  site
}: TranslateSectionProps) => {

  const [value, setValue] = useState<string>('{}')

  const getRequest = useRequest(requestGetTranslate, {
    manual: true,
    onSuccess: r => {
      setValue(JSON.stringify(r, null, 2))
    }
  })

  const setRequest = useRequest(requestSetTranslate, {
    manual: true,
    onSuccess: () => {
      message.success(t('common_update_success'))
    }
  })

  const _onChange = (value: string) => {
    setValue(value)
  }

  const _onSave = () => {
    setRequest.run({
      site,
      locale,
      data: JSON.parse(value)
    })
  }

  useEffect(() => {
    if (locale) {
      getRequest.run({
        site,
        locale
      })
    }
  }, [locale])

  return (
    <>
      <div className={styles.headerRow}>
        <Button type={'primary'} onClick={_onSave}>
          {t('common_save')}
        </Button>
      </div>
      <Editor
        value={value}
        onChange={_onChange}
        height={'600px'}
      />
    </>
  )
}

export default TranslateSection