const abrir_modal = document.querySelector('#Ingresar')
const cerrar_modal = document.querySelector('.form_cerrar')
const modal = document.querySelector('#mimodal')

abrir_modal.addEventListener("click", () => {
    modal.showModal();
})

cerrar_modal.addEventListener("click", () => {
    modal.close();
})

console.log(abrir_modal)
console.log(cerrar_modal)
console.log(modal)