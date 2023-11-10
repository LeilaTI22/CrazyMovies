
const {
        mostrarPeliculas, 
        nuevaPelicula, 
        buscarPorId, 
        modificarPelicula,
        borrarPelicula
} = require("../bd/peliculasBD");

var ruta = require("express").Router();
var subirArchivo = require("../middlewares/middelewares").subirArchivo;

ruta.get("/",async(req,res)=>{
    res.render("peliculas/index");    
});

ruta.get("/peliculas",async(req,res)=>{
    var pelis = await mostrarPeliculas();
    res.render("peliculas/peliculas", {pelis});
});


ruta.get("/nuevaPelicula",(req,res)=>{
     res.render("peliculas/nueva");
});

ruta.post("/nuevaPelicula", subirArchivo(), async(req,res)=>{
     req.body.foto = req.file.originalname;
     var error = await nuevaPelicula(req.body);
     res.redirect("/peliculas");
});

ruta.get("/editarPelicula-:id", async(req,res)=>{
     var pelicula = await buscarPorId(req.params.id);
     res.render("peliculas/modificar",{pelicula});
});



ruta.post("/editarPelicula", async(req,res)=>{
     //console.log(req.params);
     var error = await modificarPelicula(req.body);
     res.redirect("/peliculas");
})


ruta.get("/borrarPelicula/:id",async(req,res)=>{
     await borrarPelicula(req.params.id);
     res.redirect("/peliculas");
})


module.exports=ruta;