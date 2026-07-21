"use client";

import { create } from "zustand";
import type { WizardStep } from "@/constants/agreement-status";

interface AgreementWizardState {
  agreementId: string | null;
  currentStep: WizardStep;
  setAgreementId: (id: string) => void;
  setCurrentStep: (step: WizardStep) => void;
  reset: () => void;
}

export const useAgreementWizardStore = create<AgreementWizardState>((set) => ({
  agreementId: null,
  currentStep: "property",
  setAgreementId: (id) => set({ agreementId: id }),
  setCurrentStep: (step) => set({ currentStep: step }),
  reset: () => set({ agreementId: null, currentStep: "property" }),
}));
