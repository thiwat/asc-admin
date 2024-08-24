import _template from 'lodash/template'

export const compileTemplate = (template: string, data: object) => {
  try {
    return _template(template)(data)
  } catch (e) {
    return ''
  }
}