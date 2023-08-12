const primer_boton = document.getElementById("Primer_boton");
const nuevo_boton = document.createElement("button")
nuevo_boton.innerHTML= "Hola"
primer_boton.addEventListener("click",()=> {
primer_boton.remove();
document.body.appendChild(nuevo_boton);
})
