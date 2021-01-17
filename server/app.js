const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const useRouter = require('./routers/usuario.route');



const app = express();


  
// Middlewares
app.use(express.json());
app.use(morgan('dev'));
// parse requests of content-type - application/json
app.use(bodyParser.json());


//Router
app.use("/api/usuario", useRouter);

module.exports = app;