import { env } from "@/config/env";

export function getRazorpayConfig() {
  if (!env.razorpayKeyId || !env.razorpayKeySecret) {
    throw new Error("Razorpay is not configured");
  }

  return {
    keyId: env.razorpayKeyId,
    keySecret: env.razorpayKeySecret,
    webhookSecret: env.razorpayWebhookSecret,
  };
}

export async function createRazorpayOrder(_params: {
  amount: number;
  receipt: string;
  notes?: Record<string, string>;
}) {
  // Razorpay SDK integration placeholder — wire up in payment.service
  getRazorpayConfig();
  return {
    id: `order_${Date.now()}`,
    amount: _params.amount,
    currency: "INR",
    receipt: _params.receipt,
  };
}
