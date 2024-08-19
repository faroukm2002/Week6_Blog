import mongoose from "mongoose";

const notesSchema =mongoose.Schema({
    title:String,
    description:String,
    cratedBy:mongoose.SchemaTypes.ObjectId,
})

const notesModel=mongoose.model('notes',notesSchema);

export default notesModel
