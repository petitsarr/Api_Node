import mongoose from 'mongoose';

const contactSchema= new mongoose.Schema({
    firstName:{
        type: String,
        // required veut dire que ce champ est obligatoire
        required:'Entrer le prenom'
    },
    lastName:{
        type: String  
    },
    email:{
        type: String  
    },
    company:{
        type: String  
    },
    phone:{
        type: Number  
    },
    // Création d'une valeur qui n'aura pas d'entrée cad on determine ici quand cette nouvelle entrée dans notre base de données à été rentrée
    create_data:{
        type:Date,
        default: Date.now
    }
})
export {contactSchema};
