
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')

// CONEXION A LA BASE DE DATOS
mongoose.Promise = global.Promise;
const dbUrl = 'mongodb://localhost:27017/dbproject'
mongoose.connect(dbUrl,{useCreateIndex: true, useNewUrlParser: true})
.then(mongoose => console.log('Conectando a la db en el puerto 27017'))
.catch(err => console.log(err));

const app = express();
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'),(''), () => {
    console.log('server on port ' + app.get('port'));
    
});
