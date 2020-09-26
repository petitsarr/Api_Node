import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
// Import de mes routes
import routes from './src/routes/crmRoutes'

// creation d'une instance express
const app = express();
const PORT=8084;

// connection mongoose 
mongoose.Promise= global.Promise;
mongoose.connect('mongodb://localhost/CRM',{
    useNewUrlParser:true
})

// Definition de mes route
app.get('/',(req,res)=>{
    res.send( `Serveur node et express lance sur le port ${PORT}`)

});
// bodyparser
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// pour mes fichiers static qui sont dans le dossier public
app.use(express.static('public'))

app.use('/', routes)


app.listen(PORT,()=>{
    console.log('le serveur est lance')
});