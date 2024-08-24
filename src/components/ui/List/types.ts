import { Entity } from "@/enums/entity";
import { ListItemProps } from "@/types/list";
import { FilterField } from "./Filters/types";

export type ListProps = {
  hideCreate?: boolean,
  entity: Entity,
  columns: ListItemProps[],
  rowKey: string,
  baseFilters?: object,
  filters?: FilterField[],
}