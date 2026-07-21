import Link from "next/link";
import {
  Home,
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
import { cn } from "@/lib/utils";
import type { NavItem } from "@/config/dashboard-nav.config";

const ICON_MAP: Record<string, React.ElementType> = {
  overview: LayoutDashboard,
  agreements: FileText,
  payments: CreditCard,
  notifications: Bell,
  profile: User,
  customers: Users,
  commissions: DollarSign,
  referrals: GitBranch,
  users: Users,
  agents: ShieldCheck,
  templates: BookTemplate,
  reports: BarChart3,
  settings: Settings,
};

interface DashboardSidebarProps {
  items: NavItem[];
  title: string;
  pathname: string;
}

export function DashboardSidebar({
  items,
  title,
  pathname,
}: DashboardSidebarProps) {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r bg-sidebar md:flex">
      {/* Logo */}
      <div className="flex h-16 items-center border-b px-5 shrink-0">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-sm group-hover:shadow-md group-hover:shadow-primary/30 transition-all duration-200">
            <Home className="size-4 text-primary-foreground" />
          </div>
          <span className="text-base font-bold tracking-tight text-sidebar-foreground">
            {title}
          </span>
        </Link>
      </div>

      {/* Nav items */}
      <nav className="flex-1 space-y-0.5 overflow-y-auto p-3">
        {items.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== pathname.split("/").slice(0, 2).join("/") &&
              pathname.startsWith(item.href) &&
              item.href !== `/${pathname.split("/")[1]}`);

          const Icon = (item.icon && ICON_MAP[item.icon]) || LayoutDashboard;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
              )}
            >
              <Icon
                className={cn(
                  "size-4 shrink-0 transition-colors",
                  isActive
                    ? "text-primary-foreground"
                    : "text-sidebar-foreground/50 group-hover:text-sidebar-foreground"
                )}
              />
              {item.title}
            </Link>
          );
        })}
      </nav>

      {/* Bottom hint */}
      <div className="shrink-0 border-t p-3">
        <p className="text-center text-[10px] font-medium uppercase tracking-widest text-sidebar-foreground/30">
          Dashboard
        </p>
      </div>
    </aside>
  );
}
