import _get from 'lodash/get'
import { qsStringify } from './query'

export const buildQuery = (query: object): string => {
  const q = {
    page: _get(query, 'page', 1),
    page_size: _get(query, 'page_size', 10),
    keywords: _get(query, 'keywords', ''),
    filter: _get(query, 'filter', ''),
    sort: _get(query, 'sort', '')
  }

  if (q.filter) {
    q.filter = qsStringify(q.filter)
  }

  return Object.entries(q)
    .map(i => `${i[0]}=${i[1]}`)
    .join('&')
}