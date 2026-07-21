import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function CustomerProfilePage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Profile" description="Manage your account settings." />
      <PagePlaceholder title="Profile" description="Manage your account settings." />
    </div>
  );
}
