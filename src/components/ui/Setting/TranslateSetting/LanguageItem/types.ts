export type LanguageItemProps = {
  icon: string;
  name: string;
  code: string;
  isActive: boolean;
  onClick: (code: string) => void;
}