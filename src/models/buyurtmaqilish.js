import mongoose from "mongoose";

const buytmasoniSchema = new mongoose.Schema(
  {
    food: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Dori",
      required: true,
    },
    order: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Buyurtma",
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
    collection: "buyurtmasoni",
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("buyurtmasoni", buytmasoniSchema);