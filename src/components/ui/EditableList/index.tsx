import { t } from "@/utils/translate";
import { Button, Col, Input, Row } from "antd";
import { EditableListProps } from "./types";
import { PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons'
import { FormItem, FormList } from "@/components/form/Form";

const EditableList = ({
  name,
  columns,
}: EditableListProps) => {
  return (
    <FormList name={name}>
      {(fields, { add, remove }) => (
        <>
          {fields.map((field) => (
            <Row key={`row-${field.name}`} gutter={[16, 0]}>
              {columns.map(i => (
                <Col flex={1} key={i.name}>
                  <FormItem
                    name={[field.name, i.name]}
                    required
                  >
                    <Input placeholder={t(i.label)} />
                  </FormItem>
                </Col>
              ))}
              <Button
                onClick={() => remove(field.name)}
                icon={<DeleteOutlined />}
                type={'text'}
                danger
              />
            </Row>
          ))}
          <Button
            type={'primary'}
            ghost
            onClick={() => add({})}
            icon={<PlusCircleOutlined />}
          >
            {t('common_button_add')}
          </Button>
        </>
      )}
    </FormList>
  )
}

export default EditableList