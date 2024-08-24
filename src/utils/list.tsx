import _get from 'lodash/get'
import _cloneDeep from 'lodash/cloneDeep'
import { ListItemOptionProps, ListItemProps } from '@/types/list'
import { ListItemType } from "@/enums/list";
import { formatDateTime } from '@/utils/date'
import ListActions from '@/components/ui/List/Actions';
import { HolderOutlined } from '@ant-design/icons'
import { t } from './translate';
import { Tag } from 'antd';


export const prepareListColumns = (
  columns: ListItemProps[],
  key: string,
  allowDrag?: boolean,
  onClick?: (key: string | number) => void,
  sort?: string
) => {
  const cols = _cloneDeep(columns)
  if (allowDrag)
    cols.unshift({
      dataIndex: key,
      width: 40,
      type: ListItemType.drag
    })
  cols.push({
    dataIndex: key,
    key,
    width: 50,
    align: 'right',
    fixed: 'right',
    sorter: false,
    type: ListItemType.action,
    options: {
      onClick
    }
  })

  const sortField = (sort || '').replace('-', '')

  for (const col of cols) {
    col.title = t(col.title)
    col.render = _renderByType(col.type, col.options)
    col.align = _getAlign(col.type)
    col.sorter = col.sorter ?? true
    col.sortOrder = col.key === sortField
      ? sort.includes('-')
        ? 'descend'
        : 'ascend'
      : ''
  }

  return cols
}

const _getAlign = (type: ListItemType): string => {
  if ([ListItemType.boolean, ListItemType.number].includes(type)) {
    return 'center'
  }
  return ''
}

const _renderByType = (type: ListItemType, options?: ListItemOptionProps) => {
  switch (type) {
    case ListItemType.date:
      return _renderDate
    case ListItemType.number:
      return _renderNumber(options)
    case ListItemType.badge:
      return _renderBadge(options)
    case ListItemType.boolean:
      return _renderBoolean
    case ListItemType.image:
      return _renderImage
    case ListItemType.drag:
      return _renderDrag
    case ListItemType.action:
      return (rowId, record, index) => <ListActions rowId={rowId} index={index} onClick={options['onClick']} />
    default:
      return undefined
  }
}

const _renderDate = (value: string) => {
  return formatDateTime(value)
}

const _renderNumber = (options: ListItemOptionProps) => (value: string) => {
  if (options?.format === 'currency') {
    return `฿${(+value || 0).toLocaleString()}`
  }

  return value
}

const _renderBoolean = (value: boolean) => {
  return value
    ? <Tag color={'green'}>
      {t('common_yes')}
    </Tag>
    : <Tag color={'red'}>
      {t('common_no')}
    </Tag>
}

const _renderBadge = (options: ListItemOptionProps) => (value: string) => {
  return (
    <Tag color={_get(options, `mapColors.${value}`)} >
      {t(`${options.prefixTranslate}${value}`)}
    </Tag>
  )
}

const _renderImage = (value: any) => {

  const src = value
    ? value.image_data || value
    : '/images/default-file.png'

  return <img style={{ height: 50, width: 50 }} src={src} />
}

const _renderDrag = () => {
  return (
    <HolderOutlined />
  )
}