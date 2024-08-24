import { Entity } from "@/enums/entity";

export type RequestListProps = {
  entity: Entity,
  page: number,
  page_size: number,
  sort?: string;
  filter?: object,
  keywords?: string,
}

export type RequestDetailProps = {
  entity: Entity,
  id: string,
}

export type RequestCreateProps = {
  entity: Entity,
  data: any,
}

export type RequestUpdateProps = {
  entity: Entity,
  data: any,
  id: string,
}

export type RequestDeleteProps = {
  entity: Entity,
  id: string,
}

export type RequestEntityTagsProps = {
  entity: Entity,
}