export type { Role } from "@/constants/roles";
export type { Permission } from "@/constants/permissions";

export interface AccessContext {
  userId: string;
  role: import("@/constants/roles").Role;
}

export interface ResourceOwnership {
  customerId?: string;
  agentId?: string;
}
