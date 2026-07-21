import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Admin Dashboard" description="System overview and operational metrics." />
      <PagePlaceholder title="Admin Dashboard" description="System overview and operational metrics." />
    </div>
  );
}
