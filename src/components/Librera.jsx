import { useEffect, useState } from 'react'
import './Cuarto.css'
import './Librera.css'
import PropTypes from 'prop-types'

const Librera = ({ encendido, libro, setLibro }) => {
    const [contenido, setContenido] = useState(true)

    useEffect(() => {
        if (encendido && libro === 'Nothing in reproduction') setContenido(true)
        else setContenido(false)
    }, [encendido, libro])

    const ContentHandler = (valor) => setLibro(valor)
    return (
        <div className="librera">
            <div className="CajonArriba">
                <div className="Platino" />
                <div className="Estrella" />
            </div>
            <div className="CajonCentro" style={contenido ? { animation: 'latidos2 .5s infinite' } : { }}>
                <button type="button" className="work" onClick={() => ContentHandler('Work')}> </button>
                <button type="button" className="figma" onClick={() => ContentHandler('Figma')}> </button>
                <button type="button" className="replicas" onClick={() => ContentHandler('Replicas')}> </button>
                <button type="button" className="skills" onClick={() => ContentHandler('Skills')}> </button>
            </div>
        </div>
    )
}

Librera.propTypes = {
    encendido: PropTypes.bool.isRequired,
    libro: PropTypes.string.isRequired,
    setLibro: PropTypes.func.isRequired,
}

export default Librera
