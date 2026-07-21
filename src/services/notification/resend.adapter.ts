import { Resend } from "resend";
import { env } from "@/config/env";

let resendClient: Resend | null = null;

function getResendClient() {
  if (!env.resendApiKey) {
    throw new Error("Resend is not configured");
  }

  if (!resendClient) {
    resendClient = new Resend(env.resendApiKey);
  }

  return resendClient;
}

export async function sendEmail(params: {
  to: string | string[];
  subject: string;
  html: string;
}) {
  const client = getResendClient();

  return client.emails.send({
    from: env.resendFromEmail,
    to: params.to,
    subject: params.subject,
    html: params.html,
  });
}
