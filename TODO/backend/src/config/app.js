const port=3001;

const bodyParser= require("body-parser");
const express = require("express");

// pode ser substituido por server
const app = express();

const allowedCors = require9("./cors");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(allowedCors);

app.listen(port, function() {
    console.log("Aplicação rodando na porta 3001")
});

module.exports = app;