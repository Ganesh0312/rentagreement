import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto space-y-6 px-4 py-12">
      <PageHeader title="Privacy Policy" />
      <PagePlaceholder title="Privacy" description="Privacy policy content will appear here." />
    </div>
  );
}
