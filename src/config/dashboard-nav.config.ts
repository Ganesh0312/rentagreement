import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  FileText,
  CreditCard,
  Bell,
  User,
  Users,
  DollarSign,
  GitBranch,
  Settings,
  BarChart3,
  BookTemplate,
  ShieldCheck,
} from "lucide-react";
import type { Role } from "@/constants/roles";

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  roles?: Role[];
}

export const customerNav: NavItem[] = [
  { title: "Overview",      href: "/customer",               icon: LayoutDashboard },
  { title: "Agreements",    href: "/customer/agreements",    icon: FileText },
  { title: "Payments",      href: "/customer/payments",      icon: CreditCard },
  { title: "Notifications", href: "/customer/notifications", icon: Bell },
  { title: "Profile",       href: "/customer/profile",       icon: User },
];

export const agentNav: NavItem[] = [
  { title: "Overview",    href: "/agent",              icon: LayoutDashboard },
  { title: "Customers",   href: "/agent/customers",    icon: Users },
  { title: "Agreements",  href: "/agent/agreements",   icon: FileText },
  { title: "Commissions", href: "/agent/commissions",  icon: DollarSign },
  { title: "Referrals",   href: "/agent/referrals",    icon: GitBranch },
  { title: "Profile",     href: "/agent/profile",      icon: User },
];

export const adminNav: NavItem[] = [
  { title: "Overview",   href: "/admin",            icon: LayoutDashboard },
  { title: "Agreements", href: "/admin/agreements", icon: FileText },
  { title: "Users",      href: "/admin/users",      icon: Users },
  { title: "Agents",     href: "/admin/agents",     icon: ShieldCheck },
  { title: "Payments",   href: "/admin/payments",   icon: CreditCard },
  { title: "Templates",  href: "/admin/templates",  icon: BookTemplate },
  { title: "Reports",    href: "/admin/reports",    icon: BarChart3 },
  { title: "Settings",   href: "/admin/settings",   icon: Settings },
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
