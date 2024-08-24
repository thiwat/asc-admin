import useSetting from "@/services/setting"
import { t } from "@/utils/translate"
import { Button } from "antd"
import { SettingFormProps } from "./types"
import Form from "@/components/form/Form"
import PageHeader from "../PageHeader"
import Section from "../Sections"

const SettingForm = ({
  name,
  sections
}: SettingFormProps) => {

  const {
    data,
    loading,
    isSaving,
    onSave
  } = useSetting({ name, sections })

  if (loading) return null

  return (
    <Form
      name={name}
      initialValues={data}
      onFinish={onSave}
    >
      <PageHeader
        title={t(`menu_settings_${name}`)}
        extra={[
          <Button type={'primary'} htmlType={'submit'} loading={isSaving}>
            {t('common_save_button')}
          </Button>
        ]}
      />
      {sections.map((i, index) => (
        <Section
          key={`section-${index}`}
          {...i}
        />
      ))}

    </Form>
  )
}

export default SettingForm