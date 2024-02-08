import mongoose, { mongo } from "mongoose";

const bookSchema = ({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    publishingCompany: { type: String },
    price:{ type:Number },
    pages:{ type:Number }
}, { versionKey: false })

const book = mongoose.Schema.model("livros", bookSchema)

export default book