import { Roles } from "@/enums/role";

export type Profile = {
  first_name?: string;
  last_name?: string;
  full_name?: string;
  role?: Roles;
}