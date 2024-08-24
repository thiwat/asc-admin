import { FilterItemType } from "@/enums/list"

export type FilterOption = {
  label: string;
  value: string;
}

export type FilterField = {
  label: string;
  name: string;
  type: FilterItemType;
  options?: FilterOption[];
}

export type FilterProps = {
  fields: FilterField[];
  value?: any;
  onChange?: (values: any) => void;
}