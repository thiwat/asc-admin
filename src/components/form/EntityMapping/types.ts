import { Entity } from "@/enums/entity";

export type EntityMappingProps = {
  entity: Entity;
  list: string[];
  value?: any;
  onChange?: (values: any) => void;
}