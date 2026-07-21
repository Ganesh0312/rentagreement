import { ROLES, type Role } from "./roles";

export const PERMISSIONS = {
  "agreement:create": "Create agreements",
  "agreement:read:own": "View own agreements",
  "agreement:read:assigned": "View assigned agreements",
  "agreement:read:all": "View all agreements",
  "agreement:update:own": "Update own agreements",
  "agreement:submit": "Submit agreements for review",
  "agreement:approve": "Approve or reject agreements",
  "payment:create": "Initiate payments",
  "payment:read:own": "View own payments",
  "payment:read:all": "View all payments",
  "agent:manage": "Manage agents",
  "user:manage": "Manage users",
  "template:manage": "Manage agreement templates",
  "pricing:manage": "Manage pricing",
  "report:read": "View reports",
  "audit:read": "View audit logs",
  "system:manage": "Manage system settings",
} as const;

export type Permission = keyof typeof PERMISSIONS;

export const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
  [ROLES.CUSTOMER]: [
    "agreement:create",
    "agreement:read:own",
    "agreement:update:own",
    "agreement:submit",
    "payment:create",
    "payment:read:own",
  ],
  [ROLES.AGENT]: [
    "agreement:create",
    "agreement:read:assigned",
    "agreement:update:own",
    "agreement:submit",
    "payment:create",
    "payment:read:own",
  ],
  [ROLES.ADMIN]: [
    "agreement:create",
    "agreement:read:all",
    "agreement:update:own",
    "agreement:submit",
    "agreement:approve",
    "payment:create",
    "payment:read:all",
    "agent:manage",
    "user:manage",
    "template:manage",
    "pricing:manage",
    "report:read",
    "audit:read",
  ],
  [ROLES.SUPER_ADMIN]: Object.keys(PERMISSIONS) as Permission[],
};

export function roleHasPermission(role: Role, permission: Permission): boolean {
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
}
