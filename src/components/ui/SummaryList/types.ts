export type SummaryListColumnProps = {
  label: string;
  key: string;
}

export type SummaryListProps = {
  title: string;
  value: any[];
  columns: SummaryListColumnProps[];
}