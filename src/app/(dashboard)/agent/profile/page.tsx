import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function AgentProfilePage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Agent Profile" description="Agent account and license details." />
      <PagePlaceholder title="Agent Profile" description="Agent account and license details." />
    </div>
  );
}
