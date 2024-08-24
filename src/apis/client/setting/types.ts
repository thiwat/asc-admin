export type RequestGetSettingProps = {
  name: string
}

export type RequestSetSettingProps = {
  name: string,
  data: any
}

export type RequestGetTranslateProps = {
  site: string,
  locale: string,
}

export type RequestSetTranslateProps = {
  site: string,
  locale: string,
  data: object;
}