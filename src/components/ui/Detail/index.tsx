import _get from 'lodash/get'
import _isEmpty from 'lodash/isEmpty'
import useDetail from "@/services/detail"
import { t } from "@/utils/translate"
import { Button } from "antd"
import TimeStamp from "./TimeStamp"
import { DetailProps } from "./types"
import CustomActions from './CustomActions'
import DeleteButton from './DeleteButton'
import Form from '@/components/form/Form'
import PageHeader from '../PageHeader'
import Section from '../Sections'

const Detail = (props: DetailProps) => {

  const {
    form,
    data,
    actions,
    customActions,
    badgeData,
    mode,
    loading,
    displayTitle,
    onSubmit,
    onDelete,
    onClickCustomAction
  } = useDetail(props)

  if (loading) return null

  return (
    <Form
      form={form}
      name={props.entity}
      initialValues={data}
      onFinish={onSubmit}
    >
      <PageHeader
        title={displayTitle}
        badge={mode === 'update' && badgeData}
        extra={[
          mode === 'update' && <TimeStamp
            createdAt={_get(data, 'created_at')}
            updatedAt={_get(data, 'updated_at')}
          />,
          <CustomActions
            actions={customActions}
            onClick={onClickCustomAction}
            mode={mode}
          />,
          <DeleteButton
            actions={actions}
            mode={mode}
            onClick={onDelete}
          />,
          (actions.update ?? true) &&
          <Button
            type={'primary'}
            htmlType={'submit'}
          >
            {t('common_save_button')}
          </Button>
        ]}
      />
      {props.sections.map((i, index) => (
        <Section
          key={`section-${index}`}
          extraData={{
            value: data,
            mode
          }}
          {...i}
        />
      ))}
    </Form>
  )
}

export default Detail