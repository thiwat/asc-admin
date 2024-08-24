import { ActionMode } from "@/enums/detail";
import { SectionProps } from "@/types/detail";

export type FormModalProps = {
  name: string;
  title: string;
  sections?: SectionProps[];
  mode: ActionMode;
  open: boolean;
  data?: any;
  onClose: () => void;
  onSubmit?: (values: object) => void;
  onDelete?: (id?: string) => void;
}