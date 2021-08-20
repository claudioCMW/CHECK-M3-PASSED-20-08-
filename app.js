'use strict';

var express = require('express');
var app = express();
var {router} = require('./routes/index.js')
var bodyParser = require('body-parser');
app.use(router);

// Acuerdense de agregar su router o cualquier middleware que necesiten aca



// El condicional es solo para evitar algun problema de tipo EADDRINUSE con mocha watch + supertest + npm test.
if (!module.parent) app.listen(3000);
module.exports = app; // Esto es solo para testear mas facil