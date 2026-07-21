import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function HowItWorksPage() {
  return (
    <div className="container mx-auto space-y-6 px-4 py-12">
      <PageHeader title="How it works" description="From draft to registered agreement in four steps." />
      <PagePlaceholder title="Process overview" description="Step-by-step workflow content will appear here." />
    </div>
  );
}
