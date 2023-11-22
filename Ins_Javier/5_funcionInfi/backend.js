// //Son funciones que declara normalmente en javascript, pero se ejecuta de manera pivada
// (function ()  {
// let nombre = "Wilman"
// let apellido = "Rodriguez"
// console.log(nombre,apellido)
// })();

// //Syntaxis
// (function () {

// })();

//Importacion con el import
import {profesor,numero1,numero2,resultado, mensaje,moteros} from './imports/cosa.js';
// console.log(profesor,numero1,numero2,resultado);
console.table(moteros)

//Funcion flecha normal/tradicional utilizando find
const id_motero = (id) => {
        return moteros.find((motos) => {
            if (motos.id === id) {
            return motos
        }
    });
};
console.log(id_motero(4))

//Funcion flecha en dos linea utilizando find
const nombre_motero = (nombres) => {
    return moteros.find((i) => i.nombre === nombres)
}
console.log(nombre_motero("Wilman"))

//funcion en una linea utilizando find
const moto = (placa) => moteros.find((buscarplaca) => buscarplaca.motocicleta.placa === placa)
console.log(moto("23HF"))

//Filter en funcion flecha filter
const filtrador = (persona) => moteros.filter((i) => i.nombre === persona)
console.table(filtrador("Wilman"))