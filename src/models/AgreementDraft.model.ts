import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";
import { WIZARD_STEPS } from "@/constants/agreement-status";

const agreementDraftSchema = new Schema(
  {
    agreementId: {
      type: Schema.Types.ObjectId,
      ref: "Agreement",
      required: true,
      unique: true,
    },
    step: { type: String, enum: WIZARD_STEPS, required: true },
    data: { type: Schema.Types.Mixed, default: {} },
  },
  { timestamps: true },
);

export type AgreementDraftDocument = InferSchemaType<
  typeof agreementDraftSchema
> & {
  _id: mongoose.Types.ObjectId;
};

export const AgreementDraftModel: Model<AgreementDraftDocument> =
  mongoose.models.AgreementDraft ??
  mongoose.model<AgreementDraftDocument>("AgreementDraft", agreementDraftSchema);
