/*
const estudiantes = new Map();
//Set = ingresar
//get = traer
estudiantes.set("nombre","Luis");
estudiantes.set("parentesco", "Padre");
estudiantes.set("edad",40);
estudiantes.set("Zodiaco", "sagitario")
console.log(estudiantes);
console.log(estudiantes.get("nombre"));
console.log(estudiantes.size);
console.log(estudiantes.delete("Zodiaco"))
console.log(estudiantes)
*/

const RPM = new Map([["nombre","Andres"],["edad",13]]);
RPM.set("placa", "OJO123")
console.log(RPM.get("placa"))
console.log(RPM.size)
console.log(RPM)

//Sacar los datos del Map de RPM
RPM.forEach(RPM =>{ 
    console.log(RPM)
})
