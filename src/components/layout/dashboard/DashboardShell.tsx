"use client";

import { usePathname } from "next/navigation";
import { DashboardSidebar } from "@/components/layout/dashboard/Sidebar";
import { DashboardTopBar } from "@/components/layout/dashboard/TopBar";
import type { NavItem } from "@/config/dashboard-nav.config";

interface DashboardShellProps {
  children: React.ReactNode;
  navItems: NavItem[];
  title: string;
}

export function DashboardShell({
  children,
  navItems,
  title,
}: DashboardShellProps) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-muted/20">
      <DashboardSidebar items={navItems} title={title} pathname={pathname} />
      <div className="flex min-h-screen flex-1 flex-col overflow-hidden">
        <DashboardTopBar />
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-7xl space-y-6 p-4 md:p-6 animate-fade-in">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
