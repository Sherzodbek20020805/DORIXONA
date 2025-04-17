import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
  {
    food: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "",
      required: true,
    },
    order: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "order",
      required: true,
    },
    quantity: {
      type: mongoose.SchemaTypes.Int32,
      required: true,
      min: 1,
      max: 10000,
      default: 1,
    },
  },
  {
    collection: "order-items",
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("orderItem", orderItemSchema);