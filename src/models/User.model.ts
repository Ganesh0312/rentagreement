import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";
import { ROLES } from "@/constants/roles";

const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    phone: { type: String, required: true, trim: true },
    passwordHash: { type: String, required: true, select: false },
    role: {
      type: String,
      enum: Object.values(ROLES),
      default: ROLES.CUSTOMER,
    },
    image: { type: String },
    emailVerified: { type: Date },
    isActive: { type: Boolean, default: true },
    assignedAgentId: { type: Schema.Types.ObjectId, ref: "Agent" },
  },
  { timestamps: true },
);

userSchema.index({ role: 1 });

export type UserDocument = InferSchemaType<typeof userSchema> & {
  _id: mongoose.Types.ObjectId;
};

export const UserModel: Model<UserDocument> =
  mongoose.models.User ?? mongoose.model<UserDocument>("User", userSchema);
