import mongoose from "mongoose";

const BuyurtmaSchema = new mongoose.Schema(
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
        ref: "buyurtmasoni",
      },
    ],
  },
  {
    collection: "Buyurtmalar",
    timestamps: true,
    versionKey: false,
  }
);
export default mongoose.model("Buyurtma", BuyurtmaSchema);