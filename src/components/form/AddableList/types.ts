import { SectionProps } from "@/types/detail";
import { ListItemProps } from "@/types/list";

export type AddableListProps = {
  value?: any;
  onChange?: (value: any) => void;
  allowDrag?: boolean;
  disabled?: boolean;
  listLayout?: ListItemProps[];
  detailLayout?: SectionProps[];
  rowKey?: string;
}