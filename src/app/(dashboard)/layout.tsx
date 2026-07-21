import { auth } from "@/lib/auth/auth";
import { getNavForRole } from "@/config/dashboard-nav.config";
import { DashboardShell } from "@/components/layout/dashboard/DashboardShell";
import { siteConfig } from "@/config/site.config";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const role = session?.user?.role ?? "customer";
  const navItems = getNavForRole(role);

  return (
    <DashboardShell navItems={navItems} title={siteConfig.name}>
      {children}
    </DashboardShell>
  );
}
