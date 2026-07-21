import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";
import { AGREEMENT_STATUS, WIZARD_STEPS } from "@/constants/agreement-status";

const addressSchema = new Schema(
  {
    line1: String,
    line2: String,
    city: String,
    state: String,
    pincode: String,
  },
  { _id: false },
);

const partySchema = new Schema(
  {
    fullName: String,
    email: String,
    phone: String,
    aadhaar: String,
    pan: String,
    address: addressSchema,
  },
  { _id: false },
);

const propertySchema = new Schema(
  {
    type: { type: String, enum: ["residential", "commercial"] },
    address: addressSchema,
    areaSqFt: Number,
    furnishing: {
      type: String,
      enum: ["unfurnished", "semi_furnished", "fully_furnished"],
    },
  },
  { _id: false },
);

const termsSchema = new Schema(
  {
    monthlyRent: Number,
    securityDeposit: Number,
    startDate: Date,
    endDate: Date,
    noticePeriodDays: Number,
    maintenanceIncluded: Boolean,
  },
  { _id: false },
);

const agreementSchema = new Schema(
  {
    referenceNumber: { type: String, required: true, unique: true },
    status: {
      type: String,
      enum: Object.values(AGREEMENT_STATUS),
      default: AGREEMENT_STATUS.DRAFT,
    },
    stateCode: { type: String, required: true, uppercase: true },
    customerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    agentId: { type: Schema.Types.ObjectId, ref: "Agent", index: true },
    property: propertySchema,
    landlord: partySchema,
    tenant: partySchema,
    terms: termsSchema,
    currentStep: {
      type: String,
      enum: WIZARD_STEPS,
      default: "property",
    },
    rejectionReason: String,
    submittedAt: Date,
    approvedAt: Date,
    registeredAt: Date,
    completedAt: Date,
  },
  { timestamps: true },
);

agreementSchema.index({ status: 1, createdAt: -1 });
agreementSchema.index({ customerId: 1, status: 1 });

export type AgreementDocument = InferSchemaType<typeof agreementSchema> & {
  _id: mongoose.Types.ObjectId;
};

export const AgreementModel: Model<AgreementDocument> =
  mongoose.models.Agreement ??
  mongoose.model<AgreementDocument>("Agreement", agreementSchema);
