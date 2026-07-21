import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const documentSchema = new Schema(
  {
    agreementId: {
      type: Schema.Types.ObjectId,
      ref: "Agreement",
      required: true,
      index: true,
    },
    uploadedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    type: {
      type: String,
      enum: [
        "identity_proof",
        "address_proof",
        "signature",
        "property_photo",
        "final_pdf",
        "other",
      ],
      required: true,
    },
    cloudinaryPublicId: { type: String, required: true },
    url: { type: String, required: true },
    fileName: String,
    mimeType: String,
    sizeBytes: Number,
  },
  { timestamps: true },
);

export type DocumentRecord = InferSchemaType<typeof documentSchema> & {
  _id: mongoose.Types.ObjectId;
};

export const DocumentModel: Model<DocumentRecord> =
  mongoose.models.Document ??
  mongoose.model<DocumentRecord>("Document", documentSchema);
