import { request } from "../request"
import { RequestDashboardProps } from "./types"

export const requestDashboard = ({ period }: RequestDashboardProps): Promise<unknown> => {
  return request(`dashboard?period=${period}`, 'GET')
}