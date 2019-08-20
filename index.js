const express = require("express");
const app = express();

app.use(express.json());

let baseurl = "/api/v1"

var router = require("./app/v1.0/routes");
app.use(baseurl+"/songs", router);

const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/prueba';
mongoose.connect(url, { useNewUrlParser: true });



app.listen(3001, () => {
    console.log("El servidor esta escuchando en el puerto 3001");
});