import { Entity } from "@/enums/entity";
import { Actions, CustomAction, DetailBadgeProps, SectionProps } from "@/types/detail";

export type DetailProps = {
  sections: SectionProps[]
  title: string
  entity: Entity
  keyData: string,
  badge?: DetailBadgeProps
  actions?: Actions
  customActions?: CustomAction[]
}