import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function NewAgreementPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Create Agreement"
        description="Start a new rent agreement registration wizard."
      />
      <PagePlaceholder
        title="Agreement wizard"
        description="Multi-step wizard (property, landlord, tenant, terms, review) will be implemented here."
      />
    </div>
  );
}
