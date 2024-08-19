import mongoose from "mongoose";

const notesSchema =mongoose.Schema({
    title:String,
    description:String,
    createdBy:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:"user"

    },
})

const notesModel=mongoose.model('notes',notesSchema);

export default notesModel
