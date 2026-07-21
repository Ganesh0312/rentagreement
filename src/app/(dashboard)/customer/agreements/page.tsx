import Link from "next/link";
import { auth } from "@/lib/auth/auth";
import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";
import { Button } from "@/components/ui/button";
import { listAgreements } from "@/services/agreement/agreement.service";
import { Badge } from "@/components/ui/badge";
import { getAgreementStatusLabel } from "@/utils/agreement";
import type { AgreementStatus } from "@/constants/agreement-status";

export default async function CustomerAgreementsPage() {
  const session = await auth();
  let agreements: Awaited<ReturnType<typeof listAgreements>> = [];

  try {
    agreements = await listAgreements(session!.user);
  } catch {
    agreements = [];
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <PageHeader title="My Agreements" description="View and manage all your rent agreements." />
        <Button asChild>
          <Link href="/customer/agreements/new">Create agreement</Link>
        </Button>
      </div>
      {agreements.length === 0 ? (
        <PagePlaceholder
          title="No agreements yet"
          description="Create your first rent agreement to get started."
        />
      ) : (
        <div className="space-y-3">
          {agreements.map((agreement) => (
            <Link
              key={String(agreement._id)}
              href={`/customer/agreements/${agreement._id}`}
              className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
            >
              <div>
                <p className="font-medium">{agreement.referenceNumber}</p>
                <p className="text-sm text-muted-foreground">
                  {agreement.stateCode} · Updated{" "}
                  {new Date(agreement.updatedAt).toLocaleDateString("en-IN")}
                </p>
              </div>
              <Badge variant="secondary">
                {getAgreementStatusLabel(agreement.status as AgreementStatus)}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
