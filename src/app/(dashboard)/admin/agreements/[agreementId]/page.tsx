import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function AdminAgreementReviewPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Review Agreement" description="Approve or reject agreement." />
      <PagePlaceholder title="Review Agreement" description="Approve or reject agreement." />
    </div>
  );
}
