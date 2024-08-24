import { DetailItemType } from '@/enums/detail'
import { FieldItem, FieldValueFunction, SectionProps } from '@/types/detail'
import _cloneDeep from 'lodash/cloneDeep'
import _flattenDeep from 'lodash/flattenDeep'
import _get from 'lodash/get'
import _set from 'lodash/set'
import _isString from 'lodash/isString'
import { requestUploadAttachment } from '@/apis/client/attachment'
import dayjs from 'dayjs'

export const executeBooleanValue = (value: boolean | FieldValueFunction, extra): boolean => {
  if (typeof value === 'function') {
    return value(extra)
  }

  return value || false
}

export const getItemProps = (props, extra) => {
  const cloneProps = _cloneDeep(props)
  cloneProps['required'] = executeBooleanValue(cloneProps.required, extra)
  cloneProps['disabled'] = executeBooleanValue(cloneProps.disabled, extra)
  cloneProps['hidden'] = executeBooleanValue(cloneProps.hidden, extra)

  if (cloneProps.dependenciesFields) {
    cloneProps['dependencies'] = cloneProps.dependenciesFields
    delete cloneProps['dependenciesFields']
  }

  return cloneProps
}

export const prepareInitialData = (data: any, sections: SectionProps[]) => {
  const cloneData = _cloneDeep(data)
  const fields = sections.map(i => i.fields).flat()
  for (const field of fields) {
    if (field.type === DetailItemType.json && _get(data, field.name)) {
      _set(cloneData, field.name, JSON.stringify(_get(data, field.name), null, 2))
    }
    if (field.type === DetailItemType.boolean) {
      _set(cloneData, field.name, _get(cloneData, field.name) ?? false)
    }
    if (field.type === DetailItemType.datetime) {
      _set(cloneData, field.name, _get(cloneData, field.name) ? dayjs(_get(cloneData, field.name)) : null)
    }
  }
  return cloneData
}


export const prepareDataBeforeSave = async (data: any, sections: SectionProps[]): Promise<any> => {
  const cloneData = _cloneDeep(data)
  const fields: FieldItem[] = _flattenDeep([...sections.map(i => i.fields)])

  for (const field of fields) {
    const fieldData = _get(cloneData, field.name)
    if (field.type === DetailItemType.number) {
      if (_get(data, field.name)) {
        _set(cloneData, field.name, +_get(data, field.name))
      }
    }
    if (field.type === DetailItemType.json && _isString(_get(data, field.name))) {
      _set(cloneData, field.name, JSON.parse(_get(data, field.name)))
    }
    if (field.type === DetailItemType.attachment && _get(fieldData, `image_data`)) {
      const { url } = await requestUploadAttachment({
        file_name: fieldData['name'],
        path: field.options.path,
        image_data: fieldData['image_data']
      })
      _set(cloneData, field.name, url)
    }
    if (field.type === DetailItemType.addable) {
      for (const [index, item] of Object.entries(fieldData || [])) {
        fieldData[index] = await prepareDataBeforeSave(item, field.options.detailLayout)
      }
    }
  }

  return cloneData
}