const Nombre = "Wilman Rodriguez"
const Numeros = [0,1,2,3,4,5,6]
const Mensaje = "Bienvenido al curso de React con yarn"
const aprendiz = {
    nombre: "Wilman",
    apellido: "Rodriguez"
}

export const FirstApp = () => {
    return (<>
    <h1></h1>
    <p>{Nombre+ Mensaje}</p>
    <h1>{5 + 5}</h1>
    <p>{JSON.stringify(aprendiz)}</p>

    </>)
}