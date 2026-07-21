import { auth } from "@/lib/auth/auth";
import { apiSuccess, handleApiError } from "@/lib/errors/error-handler";
import { getAgreementById } from "@/services/agreement/agreement.service";
import { assertAuthenticated } from "@/services/rbac/access-control.service";

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, context: RouteContext) {
  try {
    const session = await auth();
    assertAuthenticated(session?.user);
    const { id } = await context.params;
    const agreement = await getAgreementById(session.user, id);
    return apiSuccess(agreement);
  } catch (error) {
    return handleApiError(error);
  }
}
