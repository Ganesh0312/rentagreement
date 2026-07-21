import { notFound } from "next/navigation";
import { auth } from "@/lib/auth/auth";
import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";
import { Badge } from "@/components/ui/badge";
import { getAgreementById } from "@/services/agreement/agreement.service";
import { getAgreementStatusLabel } from "@/utils/agreement";
import type { AgreementStatus } from "@/constants/agreement-status";

interface AgreementDetailPageProps {
  params: Promise<{ agreementId: string }>;
}

export default async function CustomerAgreementDetailPage({
  params,
}: AgreementDetailPageProps) {
  const { agreementId } = await params;
  const session = await auth();

  let agreement;
  try {
    agreement = await getAgreementById(session!.user, agreementId);
  } catch {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <PageHeader
          title={agreement.referenceNumber}
          description={`Agreement registration for ${agreement.stateCode}`}
        />
        <Badge>
          {getAgreementStatusLabel(agreement.status as AgreementStatus)}
        </Badge>
      </div>
      <PagePlaceholder
        title="Agreement details"
        description="Timeline, documents, and payment actions will appear here."
      />
    </div>
  );
}
