import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function AdminSystemSettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="System Settings" description="Super admin system controls." />
      <PagePlaceholder title="System Settings" description="Super admin system controls." />
    </div>
  );
}
