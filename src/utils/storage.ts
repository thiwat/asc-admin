export const setToStorage = (
  entity: string,
  key: string,
  value: any
) => {
  localStorage.setItem(`${entity}_${key}`, JSON.stringify(value))
}

export const getFromStorage = (
  entity: string,
  key: string,
  defaultValue?: any,
): any => {
  const value = localStorage.getItem(`${entity}_${key}`) || defaultValue || ''
  try {
    return JSON.parse(value)
  } catch (e) {
    return value
  }
}
