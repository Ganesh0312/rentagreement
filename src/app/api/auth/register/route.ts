import { registerSchema } from "@/lib/validators/auth.schema";
import { apiSuccess, handleApiError } from "@/lib/errors/error-handler";
import { registerUser } from "@/services/auth/auth.service";
import { ForbiddenError } from "@/lib/errors/AppError";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const input = registerSchema.parse(body);
    const user = await registerUser(input);
    return apiSuccess(user, 201);
  } catch (error) {
    if (error instanceof Error && error.message.includes("already exists")) {
      return handleApiError(new ForbiddenError(error.message));
    }
    return handleApiError(error);
  }
}
