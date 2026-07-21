import { AGREEMENT_STATUS } from "@/constants/agreement-status";
import { connectDB } from "@/lib/db/connect";
import { NotFoundError } from "@/lib/errors/AppError";
import type { CreateAgreementInput } from "@/lib/validators/agreement.schema";
import { AgreementModel } from "@/models";
import {
  assertAgreementAccess,
  assertPermission,
} from "@/services/rbac/access-control.service";
import type { Role } from "@/constants/roles";

function generateReferenceNumber(): string {
  const date = new Date();
  const ymd = [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("");
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `RA-${ymd}-${random}`;
}

export async function createAgreement(
  user: { id: string; role: Role },
  input: CreateAgreementInput,
) {
  assertPermission(user.role, "agreement:create");
  await connectDB();

  const agreement = await AgreementModel.create({
    referenceNumber: generateReferenceNumber(),
    stateCode: input.stateCode.toUpperCase(),
    customerId: user.id,
    status: AGREEMENT_STATUS.DRAFT,
    currentStep: "property",
  });

  return agreement;
}

export async function listAgreements(user: { id: string; role: Role }) {
  await connectDB();

  const filter =
    user.role === "admin" || user.role === "super_admin"
      ? {}
      : user.role === "agent"
        ? { agentId: user.id }
        : { customerId: user.id };

  return AgreementModel.find(filter).sort({ createdAt: -1 }).lean();
}

export async function getAgreementById(
  user: { id: string; role: Role },
  agreementId: string,
) {
  await connectDB();
  const agreement = await AgreementModel.findById(agreementId).lean();
  if (!agreement) throw new NotFoundError("Agreement not found");

  assertAgreementAccess(user, {
    customerId: agreement.customerId?.toString(),
    agentId: agreement.agentId?.toString(),
  });

  return agreement;
}
