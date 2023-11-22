const Nombre = "Wilman Rodriguez"
const Numeros = [0,1,2,3,4,5,6]
const Mensaje = "Bienvenido al curso de React con yarn"
const aprendiz = {
    nombre: "Wilman",
    apellido: "Rodriguez"
}

/* export const FirstApp = () => {
    return (<>
    <h1></h1>
    <p>{Nombre+ Mensaje}</p>
    <h1>{5 + 5}</h1>
    <p>{JSON.stringify(aprendiz)}</p>

    </>)
} */

/* export const FirstApp = (props) => {
    console.log(props)
    return (
        <>
            <h1> Propiedades </h1>
        </>
    )
} */

/* export const FirstApp = ({}) => {
    console.log(props)
    return (
        <>
            <h1> Propiedades </h1>
        </>
    )
} */

export const FirstApp = ({name,age,birthday}) => {
    return (
        <>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{birthday}</h3>
            <p> Hola 2</p>
        </>
    )
}

export const Avatar2 = () => {
    return (
        <>
        <img
        className="avatar"
        src="src/img/img_perfil.jpg"
        alt="Wilman Rodriguez"
        with={100}
        height={100}
        />
        <p>
            sfgdfdgdfg
        </p>
        </>
    )
}


