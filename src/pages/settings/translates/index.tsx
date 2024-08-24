import PageHeader from "@/components/ui/PageHeader"
import SettingTranslate from "@/components/ui/Setting/TranslateSetting"
import { t } from "@/utils/translate"

const SettingTranslatePage = () => {
  return (
    <>
      <PageHeader
        title={t('menu_settings_translates')}
      />
      <SettingTranslate />
    </>
  )
}

export default SettingTranslatePage