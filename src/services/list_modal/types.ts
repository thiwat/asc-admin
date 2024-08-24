import { Entity } from "@/enums/entity";
import { ListItemProps } from "@/types/list";

export type ListModalServiceProps = {
  entity: Entity;
  columns: ListItemProps[];
  defaultData?: any;
}