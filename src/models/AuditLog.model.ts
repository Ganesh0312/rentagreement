import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const auditLogSchema = new Schema(
  {
    actorId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    action: { type: String, required: true },
    resourceType: { type: String, required: true },
    resourceId: { type: String, required: true },
    metadata: Schema.Types.Mixed,
    ipAddress: String,
    userAgent: String,
  },
  { timestamps: { createdAt: true, updatedAt: false } },
);

auditLogSchema.index({ resourceType: 1, resourceId: 1 });
auditLogSchema.index({ actorId: 1, createdAt: -1 });

export type AuditLogDocument = InferSchemaType<typeof auditLogSchema> & {
  _id: mongoose.Types.ObjectId;
};

export const AuditLogModel: Model<AuditLogDocument> =
  mongoose.models.AuditLog ??
  mongoose.model<AuditLogDocument>("AuditLog", auditLogSchema);
