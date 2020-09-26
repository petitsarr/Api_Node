  import { request, response } from 'express';
import mongoose from 'mongoose';
import {contactSchema} from '../models/crmModels';

const Contact = mongoose.model('Contact',contactSchema) 

//1-Creation de la fonction pour ajouter un nouveau contact
const addNewContact =(request,response)=>{
    // recuperation du nom ,email ,phone company
    const {firstName,lastName, email,company,phone}= request.body 
    // creation de mon nouveau contact
    var newContact = new Contact({
        firstName,
        lastName,
        email,
       company,
        phone
    })
// Sauvegarde de mes nouveaux contact dans ma base de donnée
newContact.save()
.then(account=>{
    return response.send('utilisateur crée avec succes')
})
.catch(({errmsg})=>{
    return response.status(500).send(errmsg)
})

}
// 2- Creation de la fonction pour lire mes contacts
const getContacts = async (request,response)=>{
    try{
        // je récupére mes contacts
         const contact = await Contact.find().exec()
         if(!contact){
             throw new Error('Aucun contact trouvé')
         }
         else{
             return response.json(contact)
         }
    }
    catch(e){
        console.error(e)

    }
}
//3- creation de la fonction pour lire un contact spécifique
const getContactWhiteId= async (request,response)=>{
  try{
    const contact = await Contact.findOne({_id:request.params.contactId}).exec()
    if(!contact){
        throw new Error('Aucun contact trouvé')
    }
    else{
        return response.json(contact)
    }
  }
  catch (e) {
    return response.status(404).send('User not found')
  }

}
//4- creation de la methode qui permet de modifier un contact
const updateContact= async (request,response)=>{
    try{
      const contact = await Contact.findOneAndUpdate(
          {_id:request.params.contactId},
          request.body,
          {
            new: true
          }
        ).exec()
      if(!contact){
          throw new Error('Aucun contact modifé')
      }
      else{
          return response.json(contact)
      }
    }
    catch (e) {
      return response.status(404).send('User not found for modified')
    }
  
  }
  //5- creation de la methode qui permet de supprimer un contact
  const deleteContact= async (request,response)=>{
    try{
      const contact = await Contact.deleteOne(
          {_id:request.params.contactId},
        ).exec()
      if(!contact){
          throw new Error('Aucun contact modifé')
      }
      else{
          return response.json({
              message: 'Contact supprimer avec succés'
          })
      }
    }
    catch (e) {
      return response.status(404).send('User not found for modified')
    }
  
  }

export {addNewContact,getContacts,getContactWhiteId,updateContact,deleteContact} ;
