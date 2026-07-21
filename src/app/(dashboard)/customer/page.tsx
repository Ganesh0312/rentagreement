import Link from "next/link";
import { Plus, FileText, Clock, Activity } from "lucide-react";
import { auth } from "@/lib/auth/auth";
import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";
import { Button } from "@/components/ui/button";
import { listAgreements } from "@/services/agreement/agreement.service";

export default async function CustomerDashboardPage() {
  const session = await auth();
  const user = session!.user;
  let agreementCount = 0;

  try {
    const agreements = await listAgreements(user);
    agreementCount = agreements.length;
  } catch {
    agreementCount = 0;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <PageHeader
          title="Customer Dashboard"
          description="Manage your rent agreements and track registration progress."
        />
        <Button asChild className="gap-2 shadow-sm hover:shadow-md hover:shadow-primary/25 transition-all duration-200">
          <Link href="/customer/agreements/new">
            <Plus className="size-4" />
            New agreement
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <PagePlaceholder
          title={`${agreementCount}`}
          description="Total agreements"
          icon={FileText}
          trend="All your registered agreements"
        />
        <PagePlaceholder
          title="0"
          description="Pending actions"
          icon={Clock}
          trend="Items requiring your attention"
        />
        <PagePlaceholder
          title="—"
          description="Recent activity"
          icon={Activity}
          trend="Latest updates on agreements"
        />
      </div>
    </div>
  );
}
