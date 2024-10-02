import { Entity } from "@/enums/entity";
import { t } from "@/utils/translate";
import { Table } from "antd";
import _get from 'lodash/get'
import _set from 'lodash/set'
import _cloneDeep from 'lodash/cloneDeep'
import Select from "../Select";
import { EntityMappingProps } from "./types";

const EntityMapping = ({
  entity,
  list,
  value,
  onChange
}: EntityMappingProps) => {

  const _transformData = (value: any): any[] => {
    const keys = list
    const res = []
    for (const key of keys.sort()) {
      res.push({
        key,
        value: _get(value, key)
      })
    }
    return res
  }

  const _onChange = (key: string) => (data: string) => {
    const cloneValue = _cloneDeep(value || {})
    _set(cloneValue, key, data)
    onChange(cloneValue)
  }

  return (
    <Table
      dataSource={_transformData(value)}
      columns={[
        {
          title: t(`site_setting_${entity}_mapping_key`),
          key: 'key',
          dataIndex: 'key'
        },
        {
          title: t(`site_setting_${entity}_mapping_value`),
          key: 'value',
          dataIndex: 'value',
          render: (value, row) => (
            <Select
              value={value}
              options={{
                entity,
                label: '${ name }',
                value: '${ code }'
              }}
              onChange={_onChange(row.key)}
            />
          )
        }
      ]}
      pagination={{ hideOnSinglePage: true }}
    />
  )
}

export default EntityMapping