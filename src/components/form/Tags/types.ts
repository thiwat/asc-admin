import { Entity } from "@/enums/entity";

export type TagsProps = {
  entity: Entity;
  value?: string[];
  onChange?: (values: string[]) => void;
}