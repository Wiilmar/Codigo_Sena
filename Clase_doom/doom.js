//Doom es un buscador que me permite acceder a los elementos en html
//El traversi es generar un recorrido de manera detallada y permitir una navegacion especifica en el documento
// Los nodos son cada posicion de cada arreglo

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
// const imagen = document.querySelector(".hero")
// const texto = document.querySelector('.contenido-hero h1')
// const ruta = document.querySelector(".navegacion")
// let escoger;
// do {
//     escoger = parseInt(prompt("Que tipo de usuario eres? [1] Viajero [2] Motoposada [3] Ninguno"))
//     if (escoger > 3) {
//         alert("Usted escogio un numero incorrecto")
//     }
// } while (escoger > 3)

// if (escoger === 1) {
//     texto.textContent = "Bienvenido, Motoviajero"
//     ruta.firstElementChild.textContent = "Rutas "
//     ruta.children[1].textContent = "Garaje"
//     ruta.children[2].textContent = ""
//     ruta.lastElementChild.textContent = "Presupuesto"

//     imagen.url="moto.jpg"
// } else if (escoger === 2){
//     texto.textContent = "Bienvenido, Motoposada" 
//     ruta.firstElementChild.textContent = "Ubicacion"
//     ruta.children[1].textContent = "Calificacion"
//     ruta.children[2].textContent = " "
//     ruta.lastElementChild.textContent = " "
// } else if (escoger == 3) {
//     texto.textContent = "Bienvenio al mundo de ¡Rutas Para Motos!"

// }

// const card = document.querySelector(".card")
// card.children[1].children[1].textContent = "Musica"
// card.children[0].src = "img/hacer2.jpg";

//Siguiente clase
// const objeto = document.querySelector(".navegacion")
// console.log(objeto.childNodes)
// console.log(objeto.children[2])
// console.log(objeto.children)
// console.log(navegacion.children[3])
// const objeto2 = document.querySelector(".card")
// console.log(objeto2.children)
// console.log(objeto2.children[1].children[1])
// objeto.children[1].textContent = "HGola"

//Cambiar imagenes con children
// const imagen1 = document.querySelector(".contenedor-cards")
// console.log(imagen1.children[1])
// imagen1.children[1].children[0].src = "img/hacer3.jpg"

// const enlace = document.querySelector(".navegacion")
// enlace.remove();
// enlace.removeChild(enlace.children[2]);

// ----Crear nuevo elemento
// const nuevo = document.createElement("a");
// nuevo.textContent = "Este es mi enlace";
// nuevo.href = 'https://www.google.com'
// nuevo.target = 'Yupiiiii'
// console.log(nuevo)
// nuevo.classList.add('nuevo');
// const enlace = document.querySelector(".navegacion")
// enlace.appendChild(nuevo)

//---Aviso de salida de pagina web
// nuevo.onclick = alertas
// function alertas() {
//     alert("Estas a punto de entrar a google")
// }

//--Crear una nueva card
// const parrafo1 = document.createElement('p');
// parrafo1.textContent = 'FIESTA DE TORTA'
// parrafo1.classList.add('Categoria');
// parrafo1.classList.add('concierto');

// const parrafo2 = document.createElement("p")
// parrafo2.textContent = 'Participa en la gran fiesta '
// parrafo2.classList.add('titulo')

// const parrafo3 = document.createElement('p')
// parrafo3.textContent = "$40.00"
// parrafo3.classList.add("precio")

// const info = document.createElement('div')
// info.classList.add('info');
// info.appendChild(parrafo1)
// info.appendChild(parrafo2)
// info.appendChild(parrafo3)

// const imagen = document.createElement('img')
// imagen.src = 'img/hacer4.jpg'
// imagen.alt = 'Texto alternativo'
// const card = document.createElement('div')
// card.appendChild(imagen);
// card.appendChild(info);

// const contenedor = document.querySelector('.hacer .contenedor-cards');
// contenedor.appendChild(card);

// console.log(parrafo1)
// console.log(parrafo2)

// --Aviso de cuando das click
// const flow = document.querySelector('.btn-flotante')
// const footer = document.querySelector('.footer');

// flow.addEventListener('click', () => {
//     alert('Diste click');
// })
//










