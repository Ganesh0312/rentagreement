import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function FAQPage() {
  return (
    <div className="container mx-auto space-y-6 px-4 py-12">
      <PageHeader title="FAQ" description="Common questions about rent agreement registration." />
      <PagePlaceholder title="Frequently asked questions" description="FAQ accordion content will appear here." />
    </div>
  );
}
