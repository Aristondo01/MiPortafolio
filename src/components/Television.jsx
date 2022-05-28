import './Cuarto.css'
import './Television.css'
import PropTypes from 'prop-types'
import Replicas from '../../public/Replicas.json'

const Television = ({ libro }) => (

    <div className="centro">
        <div className="tele">
            <div className="pantalla" style={{ backgroundImage: `url(${Replicas[0].miniatura})` }}>{libro}</div>
        </div>
        <div className="mueble" />
    </div>
)

Television.propTypes = { libro: PropTypes.string.isRequired }

export default Television
