import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function AdminUserDetailPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="User Details" description="User profile and activity." />
      <PagePlaceholder title="User Details" description="User profile and activity." />
    </div>
  );
}
