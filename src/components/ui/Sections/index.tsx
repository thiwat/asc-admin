import { SectionProps } from '@/types/detail'
import { t } from '@/utils/translate'
import { Col, Row } from 'antd'
import styles from './index.module.css'
import FormItemByType from '@/components/form/Form/Item'

const Section = ({
  title,
  fields,
  noStyle,
  extraData
}: SectionProps) => {
  return (
    <div className={noStyle ? styles.plainContainer : styles.container}>
      {!!title &&
        <h3 className={styles.title}>
          {t(title)}
        </h3>
      }
      <Row gutter={[16, 0]}>
        {fields.map((f, index) => (
          <Col span={f.span || 12} key={`field-${index}`}>
            <FormItemByType
              {...f}
              extraData={extraData || {}}
              label={t(f.label)}
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Section