import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function AdminPaymentsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Payments" description="All platform payments." />
      <PagePlaceholder title="Payments" description="All platform payments." />
    </div>
  );
}
