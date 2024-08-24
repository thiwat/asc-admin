export type NotificationTemplateProps = {}

export type NotificationTemplateTabProps = {
  value?: any;
  type: 'email' | 'line';
  onChange?: (value: any) => void;
}