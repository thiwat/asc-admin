export type TableColumnProps = {
  label: string;
  name: string;
}

export type ExpandedOptions = {
  key: string;
  columns: TableColumnProps[];
}

export type TableProps = {
  value?: any[];
  expanable?: ExpandedOptions;
  columns: TableColumnProps[];
}