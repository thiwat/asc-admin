import { ActionMode } from "@/enums/detail";

export type DeleteButtonAction = {
  delete?: boolean;
}

export type DeleteButtonProps = {
  actions: DeleteButtonAction;
  mode: ActionMode;
  onClick: () => void;
}