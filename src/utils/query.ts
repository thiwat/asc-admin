import qs from 'qs'

export const qsStringify = (data: object) => {
  const val = qs.stringify(data, { strictNullHandling: true })
  return encodeURIComponent(val)
}