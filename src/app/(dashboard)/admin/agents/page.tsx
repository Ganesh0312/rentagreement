import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function AdminAgentsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Agents" description="Manage registration agents." />
      <PagePlaceholder title="Agents" description="Manage registration agents." />
    </div>
  );
}
