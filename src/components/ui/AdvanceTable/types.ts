import { Entity } from "@/enums/entity";
import { ListItemProps } from "@/types/list";
import { SectionProps } from "@/types/detail";

export type AdvanceTableProps = {
  entity: Entity;
  filters?: any;
  listLayout?: ListItemProps[];
  detailLayout?: SectionProps[];
  rowKey?: string;
}