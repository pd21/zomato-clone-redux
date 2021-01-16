import { connect } from 'react-redux'
import  Cuisine from '../components/Cuisine'

import axios from 'axios'

const mapStateToProps = (state) => {
    return {
        showLoader: state && state.showLoader,
        cuisines: state && state.data && state.data.cuisines,
    }
}

export default connect(mapStateToProps, null)(Cuisine)