/* eslint-disable jsx-a11y/click-events-have-key-events */
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

    const newLink = (() => {
        if (viendo.current[contador.current].link !== "") {
            window.open(viendo.current[contador.current].link)
        }
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
                    // eslint-disable-next-line jsx-a11y/control-has-associated-label
                    ? <div className="pantalla" role="button" tabIndex={0} style={{ backgroundImage: `url(${pantalla})`, backgroundColor: '#aba9a4' }} onClick={() => { newLink() }} />
                    : <div className="pantalla" />}
            </div>
            <div className="mueble" />
        </div>
    )
}

Television.propTypes = { libro: PropTypes.string.isRequired }

export default Television
