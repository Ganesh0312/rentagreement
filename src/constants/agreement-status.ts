export const AGREEMENT_STATUS = {
  DRAFT: "draft",
  SUBMITTED: "submitted",
  UNDER_REVIEW: "under_review",
  APPROVED: "approved",
  PAYMENT_PENDING: "payment_pending",
  PAYMENT_COMPLETED: "payment_completed",
  REGISTERED: "registered",
  COMPLETED: "completed",
  REJECTED: "rejected",
} as const;

export type AgreementStatus =
  (typeof AGREEMENT_STATUS)[keyof typeof AGREEMENT_STATUS];

export const AGREEMENT_STATUS_LABELS: Record<AgreementStatus, string> = {
  draft: "Draft",
  submitted: "Submitted",
  under_review: "Under Review",
  approved: "Approved",
  payment_pending: "Payment Pending",
  payment_completed: "Payment Completed",
  registered: "Registered",
  completed: "Completed",
  rejected: "Rejected",
};

export const WIZARD_STEPS = [
  "property",
  "landlord",
  "tenant",
  "terms",
  "review",
] as const;

export type WizardStep = (typeof WIZARD_STEPS)[number];
