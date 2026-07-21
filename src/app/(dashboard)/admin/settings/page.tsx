import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Settings" description="System configuration." />
      <PagePlaceholder title="Settings" description="System configuration." />
    </div>
  );
}
