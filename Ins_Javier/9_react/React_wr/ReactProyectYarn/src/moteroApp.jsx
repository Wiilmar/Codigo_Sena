import PropTypes from 'prop-types';

export const MoteroApp = ({nombre, apellido, edad}) => {
    return (
        <>
            <h1>{nombre}</h1>
            <h1>{apellido}</h1>
            <h1>{edad}</h1>

            <button onClick={() => alert("Hola")}>
                Aceptar
            </button>
        </>
    )
}

MoteroApp.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    edad: PropTypes.number.isRequired
}

MoteroApp.defaultProps = {
    nombre: "Wilman",
    apellido: "Rodriguez",
    edad: 21
}