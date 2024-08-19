import notesModel from '../../../database/models/notes.model.js';
const addNotes = async (req, res) => {
    const {token}=req.headers 
    const { title, description, createdBy } = req.body;
    jwt
    const notes =await notesModel.insertMany({ title, description, createdBy })

    res.json({message:"success", notes})
    
}
const updateNotes = async (req, res) => {
    const { title, description, id } = req.body;

    const note = await notesModel.findByIdAndUpdate(
        id,                        
        { title, description },           
        { new: true }             
    );
    if(!note)    return  res.json({ message: "note not found" });
    res.json({ message: "success", note });
}

const deleteNotes = async (req, res) => {
    const {  id } = req.body;

    const note = await notesModel.findByIdAndDelete(
        id                        
    );
    if(!note)    return  res.json({ message: "note not found" });
    res.json({ message: "success", note });
}



const getAllNotes = async (req, res) => {

    const notes = await notesModel.find({}).populate('createdBy','name -_id');
    
    res.json({ message: "success", notes });
}

const getUserNotes = async (req, res) => {
    const{createdBy} = req.params
    const notes = await notesModel.find({createdBy}
    );
    res.json({ message: "success", notes });
}

export {
    addNotes,
    updateNotes,
    deleteNotes,
    getAllNotes,
    getUserNotes
}
  