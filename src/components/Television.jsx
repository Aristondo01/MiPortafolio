/* eslint-disable quotes */
/* eslint-disable quote-props */
import { useEffect, useRef, useState } from 'react'
import './Cuarto.css'
import './Television.css'
import PropTypes from 'prop-types'
import Replicas from '../../public/Replicas.json'
import Work from '../../public/Work.json'
import Skills from '../../public/Skills.json'
import Figma from '../../public/Figma.json'

const Television = ({ libro }) => {
    const [pantalla, setPantalla] = useState()
    const viendo = useRef(Work)
    const [vacio, setVacio] = useState(false)
    const interval = useRef(null)
    const contador = useRef(0)
    const Intervalo = (() => {
        clearInterval(interval.current)
        setPantalla(viendo.current[contador.current].miniatura)
        interval.current = setInterval(() => {
            contador.current = (contador.current + 1) % viendo.current.length
            setPantalla(viendo.current[contador.current].miniatura)
        }, 3500)
    })

    useEffect(() => {
        contador.current = 0
        if (libro === 'Work') {
            viendo.current = Work
            Intervalo()
        } else if (libro === 'Figma') {
            viendo.current = Figma
            Intervalo()
        } else if (libro === 'Replicas') {
            viendo.current = Replicas
            Intervalo()
        } else if (libro === 'Skills') {
            viendo.current = Skills
            Intervalo()
        }
        if (libro !== 'Nothing in reproduction') {
            setVacio(true)
        }
    }, [libro])

    return (

        <div className="centro">
            <div className="tele">
                { vacio
                    ? <div className="pantalla" style={{ backgroundImage: `url(${pantalla})`, backgroundColor: '#aba9a4' }} />
                    : <div className="pantalla" />}
            </div>
            <div className="mueble" />
        </div>
    )
}

Television.propTypes = { libro: PropTypes.string.isRequired }

export default Television
