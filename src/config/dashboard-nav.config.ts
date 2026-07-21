import type { Role } from "@/constants/roles";

export interface NavItem {
  title: string;
  href: string;
  icon?: string;
  roles?: Role[];
}

export const customerNav: NavItem[] = [
  { title: "Overview",      href: "/customer",               icon: "overview" },
  { title: "Agreements",    href: "/customer/agreements",    icon: "agreements" },
  { title: "Payments",      href: "/customer/payments",      icon: "payments" },
  { title: "Notifications", href: "/customer/notifications", icon: "notifications" },
  { title: "Profile",       href: "/customer/profile",       icon: "profile" },
];

export const agentNav: NavItem[] = [
  { title: "Overview",    href: "/agent",              icon: "overview" },
  { title: "Customers",   href: "/agent/customers",    icon: "customers" },
  { title: "Agreements",  href: "/agent/agreements",   icon: "agreements" },
  { title: "Commissions", href: "/agent/commissions",  icon: "commissions" },
  { title: "Referrals",   href: "/agent/referrals",    icon: "referrals" },
  { title: "Profile",     href: "/agent/profile",      icon: "profile" },
];

export const adminNav: NavItem[] = [
  { title: "Overview",   href: "/admin",            icon: "overview" },
  { title: "Agreements", href: "/admin/agreements", icon: "agreements" },
  { title: "Users",      href: "/admin/users",      icon: "users" },
  { title: "Agents",     href: "/admin/agents",     icon: "agents" },
  { title: "Payments",   href: "/admin/payments",   icon: "payments" },
  { title: "Templates",  href: "/admin/templates",  icon: "templates" },
  { title: "Reports",    href: "/admin/reports",    icon: "reports" },
  { title: "Settings",   href: "/admin/settings",   icon: "settings" },
];

export function getNavForRole(role: Role): NavItem[] {
  switch (role) {
    case "agent":
      return agentNav;
    case "admin":
    case "super_admin":
      return adminNav;
    default:
      return customerNav;
  }
}
