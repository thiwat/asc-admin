import { Button, Row, Table } from "antd";
import ReactDragListView from 'react-drag-listview'
import _cloneDeep from 'lodash/cloneDeep'
import _get from 'lodash/get'
import { AddableListProps } from "./types";
import { PlusCircleOutlined } from '@ant-design/icons'
import { t } from "@/utils/translate";
import styles from './index.module.css'
import { useState } from "react";
import FormModal from "../FormModal";
import { ActionMode } from "@/enums/detail";
import { prepareListColumns } from "@/utils/list";

const AddableList = ({
  allowDrag,
  rowKey,
  value,
  detailLayout,
  listLayout,
  onChange
}: AddableListProps) => {

  const [id, setId] = useState<string>('')

  const _onClose = () => setId('')

  const _onCreate = () => {
    setId('create')
  }

  const _onEdit = (index) => {
    setId(`${index}`)
  }

  const _onDelete = () => {
    const cloneValue = _cloneDeep(value || [])
    cloneValue.splice(+id, 1)
    onChange(cloneValue)
    _onClose()
  }

  const _onSubmit = (values: any) => {
    const cloneValue = _cloneDeep(value || [])

    if (id === 'create') {
      cloneValue.push(values)
      return onChange(cloneValue)
    }

    cloneValue[+id] = values
    return onChange(cloneValue)
  }

  const _onDragEnd = (fromIndex: number, toIndex: number) => {
    const data = [...(value || [])];
    const item = data.splice(fromIndex, 1)[0];
    data.splice(toIndex, 0, item);
    onChange(data)
  }

  const title = id === 'create'
    ? t('form_modal_title_create')
    : t('form_modal_title_update')

  const mode = id === 'create'
    ? ActionMode.create
    : ActionMode.update

  return (
    <>
      <Row justify={'end'} className={styles.actionRow}>
        <Button
          type={'primary'}
          ghost
          onClick={_onCreate}
          icon={<PlusCircleOutlined />}
        >
          {t('common_button_add')}
        </Button>
      </Row>
      {allowDrag &&
        <ReactDragListView onDragEnd={_onDragEnd} handleSelector={'tr'}>
          <Table
            rowKey={rowKey || 'key'}
            dataSource={value || []}
            columns={prepareListColumns(listLayout, rowKey || 'key', allowDrag, _onEdit,)}
            pagination={allowDrag ? false : undefined}
          />
        </ReactDragListView>
      }
      <FormModal
        name={'addable-form-modal'}
        title={title}
        open={!!id}
        mode={mode}
        data={id === 'create' ? {} : _get(value, id)}
        onSubmit={_onSubmit}
        onDelete={_onDelete}
        onClose={_onClose}
        sections={detailLayout}
      />
    </>
  )
}

export default AddableList