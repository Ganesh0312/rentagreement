import { auth } from "@/lib/auth/auth";
import { createAgreementSchema } from "@/lib/validators/agreement.schema";
import { apiSuccess, handleApiError } from "@/lib/errors/error-handler";
import {
  createAgreement,
  listAgreements,
} from "@/services/agreement/agreement.service";
import { assertAuthenticated } from "@/services/rbac/access-control.service";

export async function GET() {
  try {
    const session = await auth();
    assertAuthenticated(session?.user);
    const agreements = await listAgreements(session.user);
    return apiSuccess(agreements);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(request: Request) {
  try {
    const session = await auth();
    assertAuthenticated(session?.user);
    const body = await request.json();
    const input = createAgreementSchema.parse(body);
    const agreement = await createAgreement(session.user, input);
    return apiSuccess(agreement, 201);
  } catch (error) {
    return handleApiError(error);
  }
}
