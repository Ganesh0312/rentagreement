import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const paymentSchema = new Schema(
  {
    agreementId: {
      type: Schema.Types.ObjectId,
      ref: "Agreement",
      required: true,
      index: true,
    },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    currency: { type: String, default: "INR" },
    status: {
      type: String,
      enum: ["created", "pending", "paid", "failed", "refunded"],
      default: "created",
    },
    razorpayOrderId: { type: String, index: true },
    razorpayPaymentId: { type: String },
    razorpaySignature: { type: String },
    receipt: String,
    metadata: Schema.Types.Mixed,
  },
  { timestamps: true },
);

export type PaymentDocument = InferSchemaType<typeof paymentSchema> & {
  _id: mongoose.Types.ObjectId;
};

export const PaymentModel: Model<PaymentDocument> =
  mongoose.models.Payment ??
  mongoose.model<PaymentDocument>("Payment", paymentSchema);
