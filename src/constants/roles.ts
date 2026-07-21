export const ROLES = {
  CUSTOMER: "customer",
  AGENT: "agent",
  ADMIN: "admin",
  SUPER_ADMIN: "super_admin",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

export const ROLE_LABELS: Record<Role, string> = {
  customer: "Customer",
  agent: "Agent",
  admin: "Admin",
  super_admin: "Super Admin",
};

export const DASHBOARD_HOME: Record<Role, string> = {
  customer: "/customer",
  agent: "/agent",
  admin: "/admin",
  super_admin: "/admin",
};
