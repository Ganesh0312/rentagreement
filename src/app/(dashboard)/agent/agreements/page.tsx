import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function AgentAgreementsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Agreements" description="Agreements assigned to you." />
      <PagePlaceholder title="Agreements" description="Agreements assigned to you." />
    </div>
  );
}
