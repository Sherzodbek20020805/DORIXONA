import mongoose from "mongoose";

const doriSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: [true, "dori narxi berilishi shart"],
      min: 0,
    },
    description: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    dorixona: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "dorixona",
      required: true,
    },
  },
  {
    collection: "dorilar",
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("dori", doriSchema);
