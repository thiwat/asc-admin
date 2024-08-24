export type EditableColumnProps = {
  label: string;
  name: string;
}

export type EditableListProps = {
  name: string;
  columns: EditableColumnProps[];
}