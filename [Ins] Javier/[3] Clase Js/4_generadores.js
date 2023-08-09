/*
function *Generador1 () {
    yield 1;
    yield "Wilman";
    yield 10+10;
    yield false;
    yield 3.2042;
}
let iterador = Generador1();
console.log(iterador);
console.log(iterador.next()) //recorre el generador hasta acabar  
console.log(iterador.next())
console.log(iterador.next().value) //Me imprime el valor
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
*/
function *RPM (datos) {
    for (let a=0; a<=4; a++) {
        yield datos[a];
    }
}
const datos = prompt("Ingresa la placa")    

const iterador = RPM(datos);
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());