import _get from 'lodash/get'
import _orderBy from 'lodash/orderBy'
import _reduce from 'lodash/reduce'
import dayjs from 'dayjs'
import { requestDashboard } from '@/apis/client/dashboard'
import { useRequest } from 'ahooks'
import { useEffect, useState } from 'react'
import { DashboardServiceProps } from './types'

const useDashboard = ({ }: DashboardServiceProps) => {

  const [period, setPeriod] = useState<number>(2)

  const { data, loading, run } = useRequest(requestDashboard, {
    manual: true
  })

  useEffect(() => {
    run({ period })
  }, [period])

  const getLabel = (value): string => {
    if (+value % 12 !== 6) return null

    const firstSlot = _get(data, `inheritance.graph.${value}.timestamp`)
    return dayjs(firstSlot).format('DD MMM, HH:mm')
  }

  const getIncomeLabel = (value): string => {
    if (+value % 12 !== 6) return null

    const firstSlot = _get(data, `income.graph.${value}.timestamp`)
    return dayjs(firstSlot).format('DD MMM, HH:mm')
  }

  const onChangePeriod = (value: number) => {
    setPeriod(value)
  }

  const graph = _reduce(_get(data, 'inheritance.graph') || [], (r, i) => {
    r['labels'].push(dayjs(i.timestamp).format('DD MMM, HH:mm'))
    r['new'].push(i.new || 0)
    return r
  }, { labels: [], new: [] })

  const incomeGraph = _reduce(_get(data, 'income.graph') || [], (r, i) => {
    r['labels'].push(dayjs(i.timestamp).format('DD MMM, HH:mm'))
    r['total_income'].push(i.total_income || 0)
    return r
  }, { labels: [], total_income: [] })

  return {
    data,
    period,
    graph: {
      labels: graph.labels,
      datasets: [
        {
          label: 'New Inheritance',
          categoryPercentage: 0.95,
          barPercentage: 0.95,
          data: graph.new,
          backgroundColor: '#202B4B'
        }
      ]
    },
    incomeGraph: {
      labels: incomeGraph.labels,
      datasets: [
        {
          label: 'Total Income',
          categoryPercentage: 0.95,
          barPercentage: 0.95,
          data: incomeGraph.total_income,
          backgroundColor: '#202B4B'
        }
      ]
    },
    coupons: _orderBy(data?.['coupons'] || [], ['count'], ['desc']),
    loading,
    getLabel,
    getIncomeLabel,
    onChangePeriod
  }
}

export default useDashboard