import { useState } from 'react'
import './Cuarto.css'

const Cuarto = () => {
    const [encendido, setEncendido] = useState(true)
    const prender = () => setEncendido(!encendido)

    return (
        <div className="vista" style={encendido ? { opacity: 0.2 } : { opacity: 1 }}>
            <div className="pared">
                <div className="izquierda">
                    <div className="cuadro" />
                    <div className="planta" />
                </div>
                <button type="button" className="flipon" onClick={prender}> </button>
                <div className="centro">
                    <div className="tele" />
                    <div className="mueble" />
                </div>

                <div className="librera" />
            </div>
            <div className="piso" />

        </div>
    )
}

export default Cuarto
