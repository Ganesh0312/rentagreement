import { connectDB } from "@/lib/db/connect";
import { AuditLogModel } from "@/models";

export async function createAuditLog(params: {
  actorId: string;
  action: string;
  resourceType: string;
  resourceId: string;
  metadata?: Record<string, unknown>;
  ipAddress?: string;
  userAgent?: string;
}) {
  await connectDB();

  return AuditLogModel.create({
    actorId: params.actorId,
    action: params.action,
    resourceType: params.resourceType,
    resourceId: params.resourceId,
    metadata: params.metadata,
    ipAddress: params.ipAddress,
    userAgent: params.userAgent,
  });
}
