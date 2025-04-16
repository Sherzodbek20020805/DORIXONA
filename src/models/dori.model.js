import mongoose from "mongoose";

const doriSchema = new mongoose.Schema({
    nomi:
    {
        type: mongoose.SchemaType.String,
        required: true
    },
    ishlabChiqaruvchi:
    {
        type: mongoose.SchemaType.String,
        required: true
    },
    tavsif:
    {
        type: mongoose.SchemaType.String
    },
    narx:
    {
        type: mongoose.SchemaType.Number,
        required: true
    },
    mavjud:
    {
        type: mongoose.SchemaType.Boolean,
        default: true
    },
    dorixonaId:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dorixona',
        required: true
    }
},
{
        collection: "Dori",
        timestamps: true,
        versionKey: false,
    }
);

export default mongoose.model('Dori', doriSchema);
