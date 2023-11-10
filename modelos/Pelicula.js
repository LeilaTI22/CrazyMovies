class Pelicula{
    constructor (id, data){
        this.bandera=0;
        this.id=id;
        this.titulo=data.titulo;
        this.descripcion=data.descripcion;
        this.duracion=data.duracion;
        this.foto=data.foto;
    }

set id(id){
    if (id !== null && id.length > 0) {
        this._id = id;
      } 
}

set titulo(titulo){
    this._titulo = titulo;
    titulo.length > 0 ? 
    this._titulo=titulo :
    this.bandera = 1;
}

set descripcion(descripcion){
    this._descripcion = descripcion;
    descripcion.length > 0 ? 
    this._descripcion = descripcion :
    this.bandera=1;
}

set duracion(duracion){
    this._duracion = duracion
    duracion.length > 0 ?
    this._duracion = duracion :
    this.bandera = 1;
}

set foto(foto){
    this._foto = foto
    foto.length > 0 ?
    this._foto = foto :
    this.bandera = 1;
}

get id(){
    return this._id;
}

get titulo(){
    return this._titulo;
}

get descripcion(){
    return this._descripcion;
}

get duracion(){
    return this._duracion;
}

get foto(){
    return this._foto;
}

get obtenerPelicula(){
    if(this._id != null)
        return {
            id:this.id,
            titulo:this.titulo,
            descripcion:this.descripcion,
            duracion:this.duracion,
            foto:this.foto
        }
        else
        return{
            titulo:this.titulo,
            descripcion:this.descripcion,
            duracion:this.duracion,
            foto:this.foto
        }
    }
}

module.exports=Pelicula;