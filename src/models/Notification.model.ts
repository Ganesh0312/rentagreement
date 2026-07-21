import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const notificationSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    title: { type: String, required: true },
    message: { type: String, required: true },
    type: {
      type: String,
      enum: ["info", "success", "warning", "error"],
      default: "info",
    },
    readAt: Date,
    metadata: Schema.Types.Mixed,
  },
  { timestamps: true },
);

export type NotificationDocument = InferSchemaType<
  typeof notificationSchema
> & {
  _id: mongoose.Types.ObjectId;
};

export const NotificationModel: Model<NotificationDocument> =
  mongoose.models.Notification ??
  mongoose.model<NotificationDocument>("Notification", notificationSchema);
