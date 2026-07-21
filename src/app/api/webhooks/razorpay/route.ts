import { apiSuccess, handleApiError } from "@/lib/errors/error-handler";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Razorpay webhook verification will be implemented here
    return apiSuccess({ received: true, event: body?.event ?? "unknown" });
  } catch (error) {
    return handleApiError(error);
  }
}
