const contenedor = document.querySelector(".Contenedor_notas")
const cajas = prompt("Cuantos inputs quieres?")
const identificadores = []
for (let i=1; i<=cajas; i++) {
    const texto = document.createElement("input");
    texto.type = "number"
    contenedor.appendChild(texto)
    texto.placeholder=`Nota ${i}`
    let identificador = texto.id=`Nota${i}`
    if (i>=cajas) {
        const texto = document.createElement("input");
        texto.type = "button"
        texto.value = "Calcular"
        texto.id = "Boton_1"
        contenedor.appendChild(texto)
    } 
    identificadores.push(identificador) 
}

const boton2 = document.getElementById("Boton_1")
const numeros_imput = [];
boton2.addEventListener("click",()=> {
    for (i=1; i<=cajas; i++) {
        let valores = document.getElementById(`Nota${i}`);
        let valor = parseFloat((valores.value))
        numeros_imput.push(valor)
    }

    proceso()
    console.log(numeros_imput)
})
function proceso () {
    let total_suma = 0;
    numeros_imput.forEach(x => {
        total_suma = total_suma+x/numeros_imput.length
    });
    console.log(total_suma)
}


//funciones por valores y referencias
//callbacks
//promesas




 



