import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function AgentCustomersPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Customers" description="Manage referred customers." />
      <PagePlaceholder title="Customers" description="Manage referred customers." />
    </div>
  );
}
