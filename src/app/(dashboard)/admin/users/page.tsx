import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Users" description="Manage platform users." />
      <PagePlaceholder title="Users" description="Manage platform users." />
    </div>
  );
}
