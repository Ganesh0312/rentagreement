import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function TermsPage() {
  return (
    <div className="container mx-auto space-y-6 px-4 py-12">
      <PageHeader title="Terms of Service" />
      <PagePlaceholder title="Terms" description="Legal terms content will appear here." />
    </div>
  );
}
