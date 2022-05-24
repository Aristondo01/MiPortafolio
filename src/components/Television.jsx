import './Cuarto.css'
import './Television.css'
import PropTypes from 'prop-types'

const Television = ({ libro }) => (

    <div className="centro">
        <div className="tele">{libro}</div>
        <div className="mueble" />
    </div>
)

Television.propTypes = { libro: PropTypes.string.isRequired }

export default Television
