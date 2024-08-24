import { request } from "../request";

export const requestSiteSetting = async (): Promise<any> => {
  return request(`v1/setting/site/config`, 'GET', undefined, {
    Authorization: `Basic ${Buffer.from(`${process.env.APP_KEY}:${process.env.SECRET_KEY}`).toString('base64')}`
  })
}