import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function AdminAgreementsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Agreement Queue" description="Review submitted agreements." />
      <PagePlaceholder title="Agreement Queue" description="Review submitted agreements." />
    </div>
  );
}
