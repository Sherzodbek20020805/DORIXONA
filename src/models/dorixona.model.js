import mongoose from "mongoose";

const dorixonaSchema = new mongoose.Schema(
  {
    nomi: {
      type: mongoose.Schema.Types.String,
      required: true
    },
    manzil: {
      type: mongoose.Schema.Types.String,
      required: true
    },
    lokatsiya: {
      kenglik: {
        type: mongoose.Schema.Types.Number,
        required: true
      },
      uzunlik: {
        type: mongoose.Schema.Types.Number,
        required: true
      }
    },
    ishVaqti: {
      type: mongoose.Schema.Types.String
    },
    aloqa: {
      type: mongoose.Schema.Types.String
    },
    dorilar: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "dori"
        
      }
    ]
  },
  {
    collection: "dorixonalar",
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.model("dorixona", dorixonaSchema);

