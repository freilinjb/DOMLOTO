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
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use("/api", router);

module.exports = app;