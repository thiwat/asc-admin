import { request } from "../request";

export const requestDashboard = async (period: number, headers: object): Promise<unknown> => {
  return request(`v1/dashboard?period=${period}`, 'GET', undefined, headers)
}
