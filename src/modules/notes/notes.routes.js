import express from 'express';
import { addNotes, deleteNotes, getAllNotes, getUserNotes, updateNotes } from './notes.controller.js';
import { auth } from '../../middleware/auth.js';


const notesRouter=express.Router();

notesRouter.post('/',auth,addNotes);
notesRouter.put('/',auth,updateNotes);
notesRouter.delete('/',auth,deleteNotes);
notesRouter.get('/',auth,getAllNotes);
notesRouter.get('/:createdBy',getUserNotes);


export default notesRouter

