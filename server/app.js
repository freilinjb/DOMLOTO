const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const useRouter = require('./routers/usuario.route');
const router = require('./routers/index');



const app = express();


  
// Middlewares
app.use(express.json());
app.use(morgan('dev'));
// parse requests of content-type - application/json
app.use(bodyParser.json());


//Router
// app.use("/api/usuario", useRouter);
// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000/");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
    next();
  });

app.use("/api", router);

module.exports = app;