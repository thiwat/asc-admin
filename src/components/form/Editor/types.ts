export type EditorProps = {
  mode?: 'json' | 'html';
  value?: any;
  onChange?: Function,
  disabled?: boolean;
  height?: string;
}