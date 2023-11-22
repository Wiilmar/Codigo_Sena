// No siempre estarás haciendo traversing a tu dom, 

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');




//con funcion declarada

btnFlotante.addEventListener('click', mostrar);

function mostrar() {
    if( footer.classList.contains('activo') ) {
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
}
