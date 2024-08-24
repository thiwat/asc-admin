import { Entity } from "@/enums/entity";
import { ListItemProps } from "@/types/list";

export type ListServiceProps = {
  entity: Entity,
  columns: ListItemProps[],
  rowKey: string;
  baseFilters?: object;
}