import { AGREEMENT_STATUS_LABELS } from "@/constants/agreement-status";
import type { AgreementStatus } from "@/constants/agreement-status";

export function getAgreementStatusLabel(status: AgreementStatus): string {
  return AGREEMENT_STATUS_LABELS[status] ?? status;
}

export function getAgreementProgress(status: AgreementStatus): number {
  const order: AgreementStatus[] = [
    "draft",
    "submitted",
    "under_review",
    "approved",
    "payment_pending",
    "payment_completed",
    "registered",
    "completed",
  ];

  const index = order.indexOf(status);
  if (index === -1) return 0;
  return Math.round(((index + 1) / order.length) * 100);
}
