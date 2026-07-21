import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const templateSchema = new Schema(
  {
    stateCode: { type: String, required: true, uppercase: true },
    name: { type: String, required: true },
    version: { type: Number, default: 1 },
    content: { type: String, required: true },
    variables: [{ type: String }],
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

templateSchema.index({ stateCode: 1, isActive: 1 });

export type TemplateDocument = InferSchemaType<typeof templateSchema> & {
  _id: mongoose.Types.ObjectId;
};

export const TemplateModel: Model<TemplateDocument> =
  mongoose.models.Template ??
  mongoose.model<TemplateDocument>("Template", templateSchema);
