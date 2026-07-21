import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function AgentDashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Agent Dashboard" description="Commission summary and performance KPIs." />
      <PagePlaceholder title="Agent Dashboard" description="Commission summary and performance KPIs." />
    </div>
  );
}
