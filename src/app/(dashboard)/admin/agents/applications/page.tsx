import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function AdminAgentApplicationsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Agent Applications" description="Pending agent approvals." />
      <PagePlaceholder title="Agent Applications" description="Pending agent approvals." />
    </div>
  );
}
