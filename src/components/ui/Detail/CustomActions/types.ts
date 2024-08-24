import { ActionMode } from "@/enums/detail";
import { CustomAction } from "@/types/detail";

export type CustomActionsProps = {
  mode: ActionMode;
  actions?: CustomAction[];
  onClick: (key: string) => void;
}