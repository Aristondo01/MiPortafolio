import { useState } from 'react'
import './Marco.css'

function Marco() {

  return (
    <div className='vista'>
        <div className='pared'>
        <div className='izquierda'>
            <div className='cuadro'/>
            <div className='planta'/>
        </div>

            <div className='centro'>
                <div className='tele'/>
                <div className='mueble'/>
            </div>


        </div>
        <div className='piso'/>

    </div>
  )
}

export default Marco