import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function AdminTemplatesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Templates" description="State-wise agreement templates." />
      <PagePlaceholder title="Templates" description="State-wise agreement templates." />
    </div>
  );
}
