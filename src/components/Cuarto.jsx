import { useState } from 'react'
import Librera from './Librera.jsx'
import './Cuarto.css'
import Television from './Television.jsx'
import Adornos from './Adornos.jsx'

const Cuarto = () => {
    const [encendido, setEncendido] = useState(false)
    const prender = () => setEncendido(!encendido)
    const [libro, setLibro] = useState(' ')

    return (
        <div className="vista" style={encendido ? { opacity: 0.2 } : { opacity: 1 }}>
            <div className="pared">
                <Adornos />
                <button type="button" className="flipon" onClick={prender}> </button>
                <Television libro={libro} />
                <Librera setLibro={setLibro} />
            </div>
            <div className="piso" />

        </div>
    )
}

export default Cuarto
