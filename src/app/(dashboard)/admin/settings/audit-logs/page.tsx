import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function AdminAuditLogsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Audit Logs" description="Immutable activity logs." />
      <PagePlaceholder title="Audit Logs" description="Immutable activity logs." />
    </div>
  );
}
