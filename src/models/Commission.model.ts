import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const commissionSchema = new Schema(
  {
    agentId: {
      type: Schema.Types.ObjectId,
      ref: "Agent",
      required: true,
      index: true,
    },
    agreementId: {
      type: Schema.Types.ObjectId,
      ref: "Agreement",
      required: true,
    },
    amount: { type: Number, required: true },
    rate: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "approved", "paid"],
      default: "pending",
    },
    paidAt: Date,
  },
  { timestamps: true },
);

export type CommissionDocument = InferSchemaType<typeof commissionSchema> & {
  _id: mongoose.Types.ObjectId;
};

export const CommissionModel: Model<CommissionDocument> =
  mongoose.models.Commission ??
  mongoose.model<CommissionDocument>("Commission", commissionSchema);
