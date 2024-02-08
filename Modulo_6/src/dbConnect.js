import mongoose, {mongo} from "mongoose";

async function conectaNaBase(){
    mongoose.connect("mongodb+srv://root:root123@cluster0.ilobyaa.mongodb.net/?retryWrites=true&w=majority")

    return mongoose.connection
}

export default conectaNaBase