export type CheckboxOption = {
  label: string;
  value: string;
}

export type CheckboxGroupProps = {
  value?: string[];
  options: CheckboxOption[];
  onChange?: (value: string[]) => void;
}