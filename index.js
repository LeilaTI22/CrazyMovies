var express = require("express");
var path = require("path");
var cors = require("cors");
var bodyParser = require('body-parser');
var rutasPeliculas = require("./rutas/peliculasRutas");


var app = express();
app.set("view engine","ejs");
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/", express.static(path.join(__dirname,"/web")));
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.static(__dirname + '/public'));
app.use("/", rutasPeliculas);


var port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("Servidor en http://localhost:" + port);
})