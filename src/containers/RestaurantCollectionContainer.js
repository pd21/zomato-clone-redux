import { connect } from 'react-redux'
import axios from 'axios'
import RestaurantCollection from '../components/RestaurantCollection'

const mapStateToProps = (state) => {
    return {
        restaurantCollection: state && state.data && state.data.restaurantCollection,
        collectionDetail: state && state.data && state.data.collectionDetail,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantCollection)
