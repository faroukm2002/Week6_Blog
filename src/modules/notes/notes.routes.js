import express from 'express';
import { addNotes, deleteNotes, getAllNotes, getUserNotes, updateNotes } from './notes.controller.js';


const notesRouter=express.Router();

notesRouter.post('/',addNotes);
notesRouter.put('/',updateNotes);
notesRouter.delete('/',deleteNotes);
notesRouter.get('/',getAllNotes);
notesRouter.get('/:createdBy',getUserNotes);


export default notesRouter

