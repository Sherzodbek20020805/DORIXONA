import mongoose from "mongoose";

const dorixonaSchema = new mongoose.Schema(
    {
    nomi:
    {
        type: mongoose.SchemaType.String,
        required: true
    },
    manzil:
    {
        type: mongoose.SchemaType.String,
        required: true
    },
    lokatsiya:
    {
        kenglik:
        {
            type: mongoose.SchemaType.Number,
            required: true
        },
        uzunlik:
        {
            type: mongoose.SchemaType.Number,
            required: true
        }
    },
    ishVaqti:
    {
        type: mongoose.SchemaType.String
    },
    aloqa:
    {
        type: mongoose.SchemaType.String
    }

}
    , {
        collection: "Dorixonalar",
        timestamps: true,
        versionKey: false,
    });



export default mongoose.model('Dorixona', dorixonaSchema);
