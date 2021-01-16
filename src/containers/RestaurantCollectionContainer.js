import { connect } from 'react-redux'
import axios from 'axios'
import RestaurantCollection from '../components/RestaurantCollection'

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantCollection)
