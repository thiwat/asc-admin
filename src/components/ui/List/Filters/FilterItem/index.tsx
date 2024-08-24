import CheckboxGroup from "@/components/form/CheckboxGroup";
import RadioGroup from "@/components/form/RadioGroup";
import { FilterItemType } from "@/enums/list";
import { FilterItemProps } from "./types";

const FilterItem = ({ type, options, value, onChange }: FilterItemProps) => {
  if (type === FilterItemType.options) {
    return <CheckboxGroup value={value} options={options} onChange={onChange} />
  }
  if (type === FilterItemType.boolean) {
    return <RadioGroup value={value} onChange={onChange} />
  }
}

export default FilterItem