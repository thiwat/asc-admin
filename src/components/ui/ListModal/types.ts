import { Entity } from "@/enums/entity";
import { SectionProps } from "@/types/detail";
import { ListItemProps } from "@/types/list";

export type ListModalProps = {
  entity: Entity;
  columns: ListItemProps[];
  sections: SectionProps[];
  defaultData?: any;
}
