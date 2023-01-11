//CREACION DE OBJETO:
// const pelicula = {
//     nombre: 'Harry',
//     id: 01,
//     reproducir () {
//         return `reproduciendo pelicula... ${this.nombre}`
//     }
// }

// console.log(pelicula.reproducir());


//CREACION DE OBJETO CON EL USO DE CLASES PARA CUANDO SON MUCH[ISIMOS OBJETOS]
class Pelicula { // Las clases siempre inician con la primer letra mayuscula
    constructor(nombre,id){
        this.nombre = nombre;//Los this son palabra reservada para hacer enfasis en las propiedades de esta llave u objeto
        this.id = id;
    }

    reproducir() {
        return `reproduciendo pelicula ${this.nombre}`;
    }

}

class Serie extends Pelicula {//extends es palabra reservada para copiar la plantilla del objeto Pelicula
    constructor(nombre,id,cap){
        super(nombre,id);//super es palabra reservada para copiar las propiedades del objeto anterior extends Pelicula
        this.cap = cap;
    }


    reproducirCapitulo(){
        return `reproduciendo capitulo ${this.cap}...${this.nombre}`
    }
}


const peliculaUno = new Pelicula('Harry', 1);
const peliculaDos = new Pelicula('Araña', 2);
const serieUno = new Serie('Dexter', 3,55);

console.log(peliculaUno.reproducir());
console.log(peliculaDos.reproducir());
console.log(serieUno.reproducirCapitulo());