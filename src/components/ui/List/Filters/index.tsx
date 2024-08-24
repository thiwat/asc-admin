import _isEmpty from 'lodash/isEmpty'
import _reduce from 'lodash/reduce'
import { Badge, Button, Col, Drawer, Row } from "antd"
import { FilterOutlined } from '@ant-design/icons'
import styles from './index.module.css'
import { t } from "@/utils/translate"
import { FilterProps } from "./types"
import Form, { FormItem } from '@/components/form/Form'
import FilterItem from './FilterItem'
import useFilter from '@/services/filter'

const Filters = ({ fields, value, onChange }: FilterProps) => {

  const {
    open,
    form,
    showBadge,
    toggleOpen,
    onClearAll,
    onSubmit
  } = useFilter({ fields, value, onChange })


  if (_isEmpty(fields)) return null

  return (
    <>
      <Badge dot={showBadge}>
        <Button
          className={styles.button}
          icon={<FilterOutlined />}
          onClick={toggleOpen}
        />
      </Badge>
      <Drawer
        title={t('common_filter_title')}
        open={open}
        onClose={toggleOpen}
        destroyOnClose
        styles={{ body: { paddingTop: 10 } }}
        footer={(
          <Row gutter={[10, 10]}>
            <Col span={12}>
              <Button className={styles.button} onClick={onClearAll}>
                {t('common_clear_all')}
              </Button>
            </Col>
            <Col span={12}>
              <Button type={'primary'} className={styles.button} onClick={onSubmit}>
                {t('common_submit')}
              </Button>
            </Col>
          </Row>
        )}
      >
        <Form
          form={form}
          requiredMark={false}
        >
          {fields.map(i => (
            <FormItem
              name={i.name}
              key={i.name}
              label={t(i.label)}
              className={styles.input}
            >
              <FilterItem
                type={i.type}
                options={i.options}
              />
            </FormItem>
          ))}
        </Form>
      </Drawer>
    </>
  )
}

export default Filters