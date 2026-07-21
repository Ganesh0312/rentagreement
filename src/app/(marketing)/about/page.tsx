import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function AboutPage() {
  return (
    <div className="container mx-auto space-y-6 px-4 py-12">
      <PageHeader
        title="About RentReg"
        description="Modern online rent agreement registration for India."
      />
      <PagePlaceholder title="About content" description="Company mission and team information will appear here." />
    </div>
  );
}
