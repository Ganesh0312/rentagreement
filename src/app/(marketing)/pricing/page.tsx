import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function PricingPage() {
  return (
    <div className="container mx-auto space-y-6 px-4 py-12">
      <PageHeader title="Pricing" description="Transparent fees for agreement registration." />
      <PagePlaceholder title="Pricing plans" description="State-wise pricing tiers will be configured here." />
    </div>
  );
}
