import express from 'express';
const routes = express.Router();
import {addNewContact,getContacts,getContactWhiteId, updateContact,deleteContact} from '../controllers/crmControllers';
// Definition de mes routes

// route pour lire un contact
routes.get('/contact', (req,res,next)=>{
    // utilisation de mes middleware
    console.log(`Request de : ${req.originalUrl}`)
    console.log(`Request de : ${req.method}`),
    next();
},getContacts )

// route pour lire un contact spécifique à partir de son id
routes.get('/contact/:contactId',getContactWhiteId)

// route pour ajouter un contact
routes.post('/contact',addNewContact)

// route pour modifié un contact
routes.put('/contact/:contactId',updateContact)

// route pour modifié un contact
routes.delete('/contact/:contactId',deleteContact)

export default routes;