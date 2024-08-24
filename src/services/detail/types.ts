import { Entity } from "@/enums/entity";
import { Actions, CustomAction, DetailBadgeProps, SectionProps } from "@/types/detail";

export type DetailServiceProps = {
  entity: Entity,
  keyData: string,
  sections: SectionProps[];
  title: string,
  badge?: DetailBadgeProps,
  actions?: Actions,
  customActions?: CustomAction[]
}