import { request } from "../request";
import { ListQueryInput } from "./types";
import queryString from 'query-string'

const MAP_ENTITY = {
  cms_block: 'cms/block',
  cms_page: 'cms/page',
  survey_answer: 'survey/answer'
}

const mapEntityName = (entity: string) => {
  if (entity.startsWith('master_data')) {
    return `master_data/${entity.replace('master_data_', '')}`
  }
  return MAP_ENTITY[entity] || entity
}

export const requestList = async (
  entity: string,
  query: ListQueryInput,
  headers: object
): Promise<unknown> => {
  return request(`v1/${mapEntityName(entity)}?${queryString.stringify(query)}`, 'GET', undefined, headers)
}

export const requestEntityRecord = async (
  entity: string,
  id: string,
  headers: object
): Promise<unknown> => {
  return request(`v1/${mapEntityName(entity)}/${id}`, 'GET', undefined, headers)
}

export const requestCreateRecord = async (
  entity: string,
  body: any,
  headers: object
): Promise<unknown> => {
  return request(`v1/${mapEntityName(entity)}`, 'POST', body, headers)
}

export const requestUpdateRecord = async (
  entity: string,
  id: string,
  body: any,
  headers: object
): Promise<unknown> => {
  return request(`v1/${mapEntityName(entity)}/${id}`, 'PUT', body, headers)
}

export const requestDeleteRecord = async (
  entity: string,
  id: string,
  headers: object
): Promise<unknown> => {
  return request(`v1/${mapEntityName(entity)}/${id}`, 'DELETE', {}, headers)
}

export const requestEntityTags = async (
  entity: string,
  headers: object
): Promise<unknown> => {
  return request(`v1/${mapEntityName(entity)}/tags`, 'GET', undefined, headers)
}