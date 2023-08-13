
    // Creacion de objetos y arrays (Base de datos de los productos)
    // const productos = {
    //     1: {
    //         id: document.getElementById('boton_1'),
    //         nombre: "Casa de las montanas",
    //         precio: 30000,
    //         lugar: 'cali,colombia',
    //         imagen: 'casa1.jpg'
    //     },
    //     2: {
    //         id: document.getElementById('boton_2'),
    //         nombre: "Casa Box",
    //         precio: 15000,
    //         lugar: 'tulua,colombia',
    //         imagen: 'casa2.jpg'
    //     },
    //     3: {
    //         id: document.getElementById('boton_3'),
    //         nombre: "Casa humilde",
    //         precio: 20000,
    //         lugar: 'Popayan,colombia',
    //         imagen: 'casa3.jpg'
    //     },
    //     4: {
    //         id: document.getElementById('boton_4'),
    //         nombre: "Casa del programador",
    //         precio: 60000,
    //         lugar: 'pasto,colombia',
    //         imagen: 'casa4.webp'
    //     }
    // };
    // console.table(productos)
    // -----------------------------------
    
    // Buscador de clases o id
    // const localStorage = window.localStorage;
    // -----------------------------------


    // Eventos de modal
    // -----------------------------------

    // Proceso de compra
    // productos.forEach(informacion_productos => {
    //     const {id} = productos
    //     console.log(id)
    // });
    // -----------------------------------

// function Producto1 () {
//     let Caja_producto = document.createElement('div')
//     Caja_producto.style.width='100%'
//     Caja_producto.style.background='white'
//     let Imagen_producto1 = document.createElement('img')
//     Imagen_producto1.src= './imagenes/casa1.jpg'
//     Caja_producto.appendChild(Imagen_producto1)
//     console.log(Imagen_producto1)
//     Caja_producto.textContent='Casa de las montanas'
//     Caja_producto.textContent+='Precio $30.000'
//     ventana_producto.appendChild(Caja_producto)
//     console.log(Caja_producto)
//     console.log(ventana_producto)

// }

const abrir_modal = document.getElementById("carrito_compras")
const ventana_modal = document.querySelector(".ventana_modal")
const cerrar_modal = document.getElementById('cerrar_modal')

const producto_1 = document.getElementById('cantidad_producto1');
const producto_2 = document.getElementById('cantidad_producto2');
const producto_3 = document.getElementById('cantidad_producto3');
const producto_4 = document.getElementById('cantidad_producto4');

const boton_producto1 = document.getElementById('boton_1');
const boton_producto2 = document.getElementById('boton_2');
const boton_producto3 = document.getElementById('boton_3');
const boton_producto4 = document.getElementById('boton_4');

ventana_producto1 = document.querySelector('.Producto_1');
ventana_producto2 = document.querySelector('.Producto_2');
ventana_producto3 = document.querySelector('.Producto_3');
ventana_producto4 = document.querySelector('.Producto_4');

let costo_producto1 = 0;
let costo_producto2 = 0;
let costo_producto3 = 20000;
let costo_producto4 = 60000;

let contador_producto1 = 0;
let contador_producto2 = 0;
let contador_producto3 = 0;
let contador_producto4 = 0;

//------------------------------------------------------

abrir_modal.addEventListener("click", () => {
    ventana_modal.style.display = 'block';
})

cerrar_modal.addEventListener("click", () => {
    ventana_modal.style.display = 'none';
})
//---------------------------------------------------

function total_pago (Producto1) {
    let total_pago = Producto1; 
    console.log(total_pago)
}

boton_producto1.addEventListener("click", () => {
    ventana_producto1.style.display = 'block';
    ++contador_producto1;
    if (contador_producto1 => 2) {
        producto_1.innerHTML= `<p> x${contador_producto1} </p>`
    }
})

boton_producto2.addEventListener("click", () => {
    ventana_producto2.style.display = 'block';
    ++contador_producto2;
    if (contador_producto2 => 2) {
        producto_2.innerHTML= `<p> x${contador_producto2} </p>`
    }
})

boton_producto3.addEventListener("click", () => {
    ventana_producto3.style.display = 'block';
    ++contador_producto3;
    if (contador_producto3 => 2) {
        producto_3.innerHTML= `<p> x${contador_producto3} </p>`
    }
})

boton_producto4.addEventListener("click", () => {
    ventana_producto4.style.display = 'block';
    ++contador_producto4;
    if (contador_producto4 => 2) {
        producto_4.innerHTML= `<p> x${contador_producto4} </p>`
    }
})



