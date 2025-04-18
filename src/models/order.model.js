import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    totalPrice: {
      type: mongoose.SchemaTypes.Number,
      required: true,
    },
    user: { 
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    orderItems: [ 
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "orderItem",
      },
    ],
  },
  {
    collection: "orders",
    timestamps: true,
    versionKey: false,
  }
);
export default mongoose.model("order", orderSchema);

