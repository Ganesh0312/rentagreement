import type { AgreementStatus, WizardStep } from "@/constants/agreement-status";

export interface Address {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
}

export interface PartyDetails {
  fullName: string;
  email?: string;
  phone: string;
  aadhaar?: string;
  pan?: string;
  address: Address;
}

export interface PropertyDetails {
  type: "residential" | "commercial";
  address: Address;
  areaSqFt?: number;
  furnishing?: "unfurnished" | "semi_furnished" | "fully_furnished";
}

export interface AgreementTerms {
  monthlyRent: number;
  securityDeposit: number;
  startDate: string;
  endDate: string;
  noticePeriodDays: number;
  maintenanceIncluded: boolean;
}

export interface Agreement {
  id: string;
  referenceNumber: string;
  status: AgreementStatus;
  stateCode: string;
  customerId: string;
  agentId?: string;
  property?: PropertyDetails;
  landlord?: PartyDetails;
  tenant?: PartyDetails;
  terms?: AgreementTerms;
  currentStep?: WizardStep;
  createdAt: string;
  updatedAt: string;
}

export interface AgreementDraft {
  agreementId: string;
  step: WizardStep;
  data: Record<string, unknown>;
}
