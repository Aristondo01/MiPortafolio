import { useState } from 'react'
import Librera from './Librera.jsx'
import './Cuarto.css'
import Television from './Television.jsx'
import Adornos from './Adornos.jsx'

const Cuarto = () => {
    const [encendido, setEncendido] = useState(false)
    const [libro, setLibro] = useState('Nothing in reproduction')
    const prender = () => {
        setEncendido(!encendido)
        setLibro('Nothing in reproduction')
    }
    return (
        <div className="vista" style={encendido ? { opacity: 1 } : { opacity: 0.2 }}>
            <div className="pared">
                <Adornos />
                <button type="button" className="flipon" onClick={prender} style={encendido ? { } : { animation: 'latidos .5s infinite' }}> </button>
                <Television libro={libro} />
                <Librera encendido={encendido} libro={libro} setLibro={setLibro} />
            </div>
            <div className="piso" />

        </div>
    )
}

export default Cuarto
