document.addEventListener('DOMContentLoaded', () => {
    // Creacion de objetos y arrays (Base de datos de los productos)
    const productos = {
        1: {
            id: document.getElementById('boton_1'),
            nombre: "Casa de las montanas",
            precio: 30000,
            lugar: 'cali,colombia',
            imagen: 'casa1.jpg'
        },
        2: {
            id: document.getElementById('boton_2'),
            nombre: "Casa Box",
            precio: 15000,
            lugar: 'tulua,colombia',
            imagen: 'casa2.jpg'
        },
        3: {
            id: document.getElementById('boton_3'),
            nombre: "Casa humilde",
            precio: 20000,
            lugar: 'Popayan,colombia',
            imagen: 'casa3.jpg'
        },
        4: {
            id: document.getElementById('boton_4'),
            nombre: "Casa del programador",
            precio: 60000,
            lugar: 'pasto,colombia',
            imagen: 'casa4.webp'
        }
    };
    console.table(productos)
    // -----------------------------------
    
    // Buscador de clases o id
    const abrir_modal = document.getElementById("carrito_compras")
    const ventana_modal = document.querySelector(".ventana_modal")
    const cerrar_modal = document.getElementById('cerrar_modal')
    const ventana_producto = document.getElementById('caja_producto')
    const localStorage = window.localStorage;
    // -----------------------------------


    // Eventos de modal
    abrir_modal.addEventListener("click", () => {
        ventana_modal.style.display = 'block';
    })

    cerrar_modal.addEventListener("click", () => {
        ventana_modal.style.display = 'none';
    })
    // -----------------------------------

    // Proceso de compra
    productos.forEach(informacion_productos => {
        const {id} = productos
        console.log(id)
    });


    



    // -----------------------------------
})




