import { DetailItemType } from "@/enums/detail";
import { FieldItemOptions, FieldValueFunction } from "@/types/detail";
import { FormItemProps } from "antd";

type Overwrite<T, U> = Omit<T, keyof U> & U;

export type FormItemByTypeProps = Overwrite<FormItemProps, {
  type: DetailItemType,
  dependenciesFields?: string[],
  disabled?: boolean | FieldValueFunction;
  required?: boolean | FieldValueFunction;
  hidden?: boolean | FieldValueFunction;
  extraData: any;
  options?: FieldItemOptions;
  allowTranslate?: boolean;
}>