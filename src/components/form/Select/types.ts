import { FieldItemOptions } from '@/types/detail'

export type SelectProps = {
  value?: any;
  disabled?: boolean;
  options: FieldItemOptions;
  onChange?: (value) => void;
}