import { request } from "../request"
import {
  RequestCreateProps,
  RequestDeleteProps,
  RequestDetailProps,
  RequestEntityTagsProps,
  RequestListProps,
  RequestUpdateProps
} from "./types"
import { buildQuery } from "@/utils/request"

export const requestList = ({ entity, ...other }: RequestListProps): Promise<unknown> => {
  return request(`/entity/${entity}?${buildQuery(other)}`, 'GET')
}

export const requestDetail = ({ entity, id }: RequestDetailProps): Promise<object> => {
  return request(`/entity/${entity}/${id}`, 'GET')
}

export const requestCreate = ({ entity, data }: RequestCreateProps): Promise<object> => {
  return request(`/entity/${entity}`, 'POST', data)
}

export const requestUpdate = ({ entity, id, data }: RequestUpdateProps): Promise<object> => {
  return request(`/entity/${entity}/${id}`, 'PUT', data)
}

export const requestDelete = ({ entity, id }: RequestDeleteProps): Promise<object> => {
  return request(`/entity/${entity}/${id}`, 'DELETE', {})
}

export const requestEntityTags = ({ entity }: RequestEntityTagsProps): Promise<object> => {
  return request(`/entity/${entity}/tags`, 'GET')
}