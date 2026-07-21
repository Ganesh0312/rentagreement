import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function CustomerPaymentsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Payments" description="View payment history and receipts." />
      <PagePlaceholder title="Payments" description="View payment history and receipts." />
    </div>
  );
}
