import { FilterItemType } from "@/enums/list";
import { FilterOption } from "../types";

export type FilterItemProps = {
  type: FilterItemType;
  options?: FilterOption[];
  value?: any;
  onChange?: (value: any) => void;
}