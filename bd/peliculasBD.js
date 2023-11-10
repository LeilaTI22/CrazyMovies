var conexion = require("./conexion").conexionPeliculas;
var Pelicula = require("../modelos/Pelicula");

async function mostrarPeliculas(){
    var pelis = [];
    try{
        var peliculas = await conexion.get();
        peliculas.forEach(pelicula =>{ 
            var pelicula1 = new Pelicula(pelicula.id, pelicula.data())
            if (pelicula1.bandera == 0){
                pelis.push(pelicula1.obtenerPelicula);
            }
        })
    }
    catch(err){
        console.log("Error al Recuperar Peliculas: " + err); 
    }
    return pelis;
}

async function nuevaPelicula(newMovie){
    var error = 0;
    try{
        var pelicula1 = new Pelicula(null, newMovie);
        if(pelicula1.bandera == 0){
            conexion.doc().set(pelicula1.obtenerPelicula);
            error = 0;
        }
        else{
            console.log("Datos Incorrectos");
        }
    }
    catch(err){
        console.log("Error al Crear Pelicula " + err);
    }
    return error;
 }

 async function buscarPorId(id){
    var peli;
    try{
        var peliculaBD = await conexion.doc(id).get();
        var peliculaObjeto = new Pelicula(peliculaBD.id, peliculaBD.data());
        if(peliculaObjeto.bandera == 0){
            peli = peliculaObjeto.obtenerPelicula;
        }
    }
    catch(err){
        console.log("Error al Recuperar La Pelicula " + err);
    }
    return  peli;
 }
 
 async function modificarPelicula(datos){
    var error = 1;
    var peli = await buscarPorId(datos.id);
    if(peli != undefined){
        var peli = new Pelicula(datos.id, datos);
    
        if(peli.bandera == 0){
            try{
                await conexion.doc(peli.id).set(peli.obtenerPelicula);
                console.log("Los Datos se Modificaron Correctamente");
                error = 0;
            }
            catch(error){
                console.log("Error Al Modificar Pelicula " + error);      
            }
        }else{
            console.log("Error, Los Datos Son Inválidos");
        }
    }
    return error;
}


 async function borrarPelicula(id){
    var error = 1;
    var peli = await buscarPorId(id);
    if(peli !=undefined){
        try{
            await conexion.doc(id).delete();
            console.log("La Película se Borró Correctamente");
            error = 0;
    
        }
        catch(err){
            console.log("Error Al Borrar Pelicula");
        }
    }return error;
    
 }
 

 module.exports = {
    mostrarPeliculas,
    nuevaPelicula,
    buscarPorId,
    modificarPelicula,
    borrarPelicula
 }