import _get from 'lodash/get'
import _isEmpty from 'lodash/isEmpty'
import _cloneDeep from 'lodash/cloneDeep'
import { DetailItemType } from "@/enums/detail"
import { Checkbox, DatePicker, Input, Switch } from "antd"
import { FormItem } from ".."
import { FormItemByTypeProps } from "./types"
import { getItemProps } from '@/utils/form'
import { t } from '@/utils/translate'
import NextLink from 'next/link'
import { compileTemplate } from '@/utils/template'
import { LinkOutlined } from '@ant-design/icons'
import ColorPicker from '../../ColorPicker'
import Select from '../../Select'
import AddableList from '../../AddableList'
import EditableList from '@/components/ui/EditableList'
import EntityMapping from '../../EntityMapping'
import Editor from '../../Editor'
import Attachment from '../../Attachment'
import NotificationTemplate from '../../NotificationTemplate'
import AdvanceTable from '@/components/ui/AdvanceTable'
import WysiwygEditor from '../../Wysiwyg'
import Tags from '../../Tags'

const FormItemByType = ({
  type,
  extraData,
  options,
  ...props
}: FormItemByTypeProps) => {

  const _renderItem = ({ disabled, ...props }) => {

    props['disabled'] = disabled

    if (type === DetailItemType.string) {
      if (options?.format) {
        return (
          <FormItem {...props}>
            <Input
              disabled={disabled}
              addonAfter={
                <NextLink
                  target={'_blank'}
                  href={compileTemplate(options.format, extraData?.value || {})}
                >
                  <LinkOutlined />
                </NextLink>
              }
            />
          </FormItem >
        )
      }
      return (
        <FormItem {...props}>
          <Input disabled={disabled} />
        </FormItem>
      )
    }
    if (type === DetailItemType.number) {
      return (
        <FormItem {...props}>
          <Input type={'number'} disabled={disabled} suffix={t(options?.suffix)} />
        </FormItem>
      )
    }
    if (type === DetailItemType.boolean) {
      return (
        <FormItem {...props} valuePropName="checked" style={{ marginBottom: 5 }}>
          <Switch disabled={disabled} />
        </FormItem>
      )
    }
    if (type === DetailItemType.password) {
      return (
        <FormItem {...props}>
          <Input.Password disabled={disabled} />
        </FormItem>
      )
    }
    if (type === DetailItemType.color_picker) {
      return (
        <FormItem {...props}>
          <ColorPicker disabled={disabled} />
        </FormItem>
      )
    }
    if (type === DetailItemType.checkbox) {
      return (
        <FormItem {...props}>
          <Checkbox.Group options={options.options.map(i => ({
            label: t(i.label),
            value: i.value
          }))} />
        </FormItem>
      )
    }
    if (type === DetailItemType.select) {
      return (
        <FormItem {...props}>
          <Select options={options} disabled={disabled} />
        </FormItem>
      )
    }
    if (type === DetailItemType.datetime) {
      return (
        <FormItem {...props}>
          <DatePicker disabled={disabled} style={{ width: '100%' }} format={options?.format || 'DD MMM YY HH:mm:ss'} />
        </FormItem>
      )
    }
    if (type === DetailItemType.addable) {
      return (
        <FormItem {...props}>
          <AddableList
            detailLayout={options.detailLayout}
            listLayout={options.listLayout}
            allowDrag={options.allowDrag}
            disabled={disabled}
          />
        </FormItem>
      )
    }
    if (type === DetailItemType.editable) {
      return (
        <FormItem label={props.label} required={props.required} hidden={props.hidden}>
          <EditableList columns={options.columns} name={props.name} />
        </FormItem>
      )
    }
    if (type === DetailItemType.entity_mapping) {
      return (
        <FormItem {...props}>
          <EntityMapping entity={options.entity} list={options.list} />
        </FormItem>
      )
    }
    if (type === DetailItemType.json) {
      return (
        <FormItem {...props}>
          <Editor />
        </FormItem>
      )
    }
    if (type === DetailItemType.html) {
      return (
        <FormItem {...props}>
          <Editor mode={'html'} />
        </FormItem>
      )
    }
    if (type === DetailItemType.attachment) {
      return (
        <FormItem {...props}>
          <Attachment
            disabled={disabled}
            accept={options.accept}
          />
        </FormItem>
      )
    }
    if (type === DetailItemType.notification_template) {
      return (
        <NotificationTemplate />
      )
    }
    if (type === DetailItemType.advance_table) {
      return (
        <AdvanceTable
          entity={options.entity}
          filters={options.filters(extraData)}
          listLayout={options.listLayout}
          detailLayout={options.detailLayout}
        />
      )
    }
    if (type === DetailItemType.wysiwyg) {
      return (
        <FormItem {...props}>
          <WysiwygEditor />
        </FormItem>
      )
    }
    if (type === DetailItemType.tags) {
      return (
        <FormItem {...props}>
          <Tags entity={options.entity} />
        </FormItem>
      )
    }
  }

  if (!_isEmpty(props.dependenciesFields)) {
    return (
      <FormItem
        noStyle
        shouldUpdate={(prev, curr) => {
          for (const field of props.dependenciesFields) {
            if (_get(prev, field) !== _get(curr, field)) {
              return true
            }
          }
          return false
        }}
      >
        {({ getFieldsValue }) => {
          return _renderItem(getItemProps(props, {
            values: {
              ...(extraData?.values || {}),
              ...getFieldsValue()
            },
            mode: extraData?.mode
          }))
        }}
      </FormItem>
    )
  }

  return _renderItem(getItemProps(props, extraData))
}

export default FormItemByType