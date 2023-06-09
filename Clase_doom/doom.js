//Doom es un buscador que me permite acceder a los elementos en html

// let recorrido;
// recorrido = document.head;
// recorrido=document.forms[0];
// recorrido = document.links;
// recorrido = document.links[2];
// recorrido = document.images[1];
// console.log(recorrido);

// const encabezado = document.getElementsByClassName('contenedor');
// console.log(encabezado)

// const carta1 = document.querySelector('.info');
// const carta1 = document.querySelector('.hospedaje .card:nth-child(3)');
// const carta1 = document.querySelector('.contenido-hero #formulario');
// const carta1 = document.querySelectorAll('.card')
// console.log(carta1)

// const encabezado = document.querySelector(`.contenido-hero h1`)
// console.log(encabezado.innerHTML)
// console.log(encabezado.textContent)
// console.log(encabezado.innerText)

// document.querySelector('.contenido-hero h1').textContent = "Rutas para Moteros"

// const Nuevotexto = "Pagina de camilo"
// document.querySelector('.hacer h2').textContent = Nuevotexto

//Practica de interactividad en js usando el if
// alert("Hola usuario")
// let caso = prompt("Que tipo de usuario eres?")

// if ((caso == "motoviajero") || (caso =="Motoviajero") || (caso=="viajero")) {
//     document.querySelector('.contenido-hero h1').textContent = "Bienvenido, ¡Moto-Viajero!"
// } 
// else if ((caso== "motoposada") || (caso=="Motoposada") || (caso=="posada")) {
//     document.querySelector('.contenido-hero h1').textContent = "Bienvenido, ¡Moto-Posada!"
// }
// else {
//     document.querySelector(".contenido-hero h1").textContent= "Bienvenido al mundo de ¡Rutas para moteros!"
// }

//Practica de interactividad usando el ciclo repetitivo
const imagen = document.querySelector(".hero")
const texto = document.querySelector('.contenido-hero h1')
const ruta = document.querySelector(".navegacion")
let escoger;
do {
    escoger = parseInt(prompt("Que tipo de usuario eres? [1] Viajero [2] Motoposada [3] Ninguno"))
    if (escoger > 3) {
        alert("Usted escogio un numero incorrecto")
    }
} while (escoger > 3)

if (escoger === 1) {
    texto.textContent = "Bienvenido, Motoviajero"
    ruta.firstElementChild.textContent = "Rutas "
    ruta.children[1].textContent = "Garaje"
    ruta.children[2].textContent = ""
    ruta.lastElementChild.textContent = "Presupuesto"

    imagen.url="moto.jpg"
} else if (escoger === 2){
    texto.textContent = "Bienvenido, Motoposada" 
    ruta.firstElementChild.textContent = "Ubicacion"
    ruta.children[1].textContent = "Calificacion"
    ruta.children[2].textContent = " "
    ruta.lastElementChild.textContent = " "
} else if (escoger == 3) {
    texto.textContent = "Bienvenio al mundo de ¡Rutas Para Motos!"

}

// const card = document.querySelector(".card")
// card.children[1].children[1].textContent = "Musica"
// card.children[0].src = "img/hacer2.jpg";

