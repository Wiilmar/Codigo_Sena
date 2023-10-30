import PropTypes from 'prop-types';

export const Clase = ({titulo, subtitulo}) => {
    return (
        <>
        <h1> {titulo}</h1>
        <h3> {subtitulo} </h3>
        </>
    )
}

Clase.PropType = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string
}

Clase.defaultProps = {
    titulo: "La rosalia",
    subtitulo: "Creada en 1919"
}