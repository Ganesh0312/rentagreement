import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function RefundPolicyPage() {
  return (
    <div className="container mx-auto space-y-6 px-4 py-12">
      <PageHeader title="Refund Policy" />
      <PagePlaceholder title="Refunds" description="Refund policy content will appear here." />
    </div>
  );
}
