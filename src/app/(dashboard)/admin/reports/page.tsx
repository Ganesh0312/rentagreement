import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function AdminReportsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Reports" description="Analytics and exportable reports." />
      <PagePlaceholder title="Reports" description="Analytics and exportable reports." />
    </div>
  );
}
