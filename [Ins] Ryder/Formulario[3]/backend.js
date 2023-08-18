//Forma de rider \(original\) callbacks
/* const miDiv = document.querySelector("#midiv")
const miBoton = document.getElementById("miboton")
//------------------
const setText = data =>{
    miDiv.textContent=data;
    console.log(typeof(data))
}
//------------------
const getData = c1 => {
    setText("Puedo jugar");
    setTimeout(()=> {
        c1(true)
    },2000)
}
//------------------
const showData=c2=>{
    setText("Esperando autorizaion");
    setTimeout(()=> {
        c2({jugador:"rider"})
    },2000)
}
//------------------
miBoton.addEventListener("click",()=>{
    getData(permitido=>{
        if(permitido){
            showData(user=>{
                console.log(typeof(user))
                setText(user.jugador)
            })
        }
    })
}) */

//Forma de rider (promesas)
const miDiv = document.querySelector("#midiv")
const miBoton = document.getElementById("miboton")
//------------------
const setText = data =>{
    miDiv.textContent=data;
}
//------------------
const getData = () => {
    return new promise((resuelve,rechaza) => {
    setText("Puedo jugar");
    setTimeout(()=> {
            resuelve(true)
        },2000)
    })
} 
//------------------
const showData=c2=>{
    return new promise ((resuelve1, rechaza1) => {
        setText("Esperando autorizaion");
        setTimeout(()=> {
            resuelve1({jugador:"rider"})
        },2000)
    })
}
//------------------
miBoton.addEventListener("click",()=>{
    getData().then (permitido=>{
        if(permitido){
        return showData()
        }
    }).then(user => {
        setText(user.jugador)
    })
})

/* promesas
//------------------
const miDiv = document.querySelector("#midiv")
const miBoton = document.getElementById("miboton")
const cuadro = document.getElementById("Boton_desplazamiento")
//------------------
const setText = data =>{
    miDiv.textContent=data;
    console.log(typeof(data))
}
//------------------
function desplazamiento() {
    let desplazamiento_izquierda = 10
    let desplazamiento_derecha = 5
    let desplazamiento_arriba= 0
    let desplazamiento_abajo= 0
    if (desplazamiento_izquierda >= 1) {
        cuadro.style.display = "block"
        for (let contador = 0; contador <= desplazamiento_izquierda; contador++){
            setTimeout(()=> {
                cuadro.style.width = "100px";
            },2000) 

        }
    }
    
} 
const getData = c1 => {
    setText("Puedo jugar?");
    setTimeout(()=> {
        let confirmacion_usuario = confirm("Responde")
        if (confirmacion_usuario== true) {
            c1(true)
            desplazamiento(cuadro)
        } else {
            c1(false)
            miDiv.textContent="No vas a jugar, Vete";
        }
    },)
}
//------------------
const showData=c2=>{
    setText("Esperando autorizaion");
    setTimeout(()=> {
        c2({jugador:"rider"})
    },2000)
}
//------------------
miBoton.addEventListener("click",()=>{
    getData(permitido=>{
        if(permitido){
            showData(user=>{
                console.log(typeof(user))
                setText(user.jugador)
            })
        }
    })
})
*/