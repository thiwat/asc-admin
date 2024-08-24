import dayjs from 'dayjs'

export const formatDateTime = (value: string): string => {
  return value
    ? dayjs(value).format('DD MMM YY, HH:mm')
    : '-'
}