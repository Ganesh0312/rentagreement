import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function AdminNotificationsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Notifications" description="Broadcast and system notifications." />
      <PagePlaceholder title="Notifications" description="Broadcast and system notifications." />
    </div>
  );
}
