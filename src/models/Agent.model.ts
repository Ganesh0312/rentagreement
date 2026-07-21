import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const agentSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    licenseNumber: { type: String, trim: true },
    territory: [{ type: String }],
    commissionRate: { type: Number, default: 10, min: 0, max: 100 },
    status: {
      type: String,
      enum: ["pending", "approved", "suspended", "rejected"],
      default: "pending",
    },
    totalEarnings: { type: Number, default: 0 },
    referralCode: { type: String, unique: true, sparse: true },
  },
  { timestamps: true },
);

export type AgentDocument = InferSchemaType<typeof agentSchema> & {
  _id: mongoose.Types.ObjectId;
};

export const AgentModel: Model<AgentDocument> =
  mongoose.models.Agent ?? mongoose.model<AgentDocument>("Agent", agentSchema);
