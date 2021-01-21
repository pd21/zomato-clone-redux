import { connect } from 'react-redux'
import axios from 'axios'
import RestaurantCollection from '../components/RestaurantCollection'

import { loadRestaurantData, showLoaderData, hideLoaderData} from '../actions'

import { FETCH_RESTAURANTS_DETAILS } from '../constants/api'

const mapStateToProps = (state) => {
    return {
        restaurantCollection: state && state.data && state.data.restaurantCollection,
        collectionDetail: state && state.data && state.data.collectionDetail,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRestaurantDetails(restaurant_id){
            dispatch(showLoaderData())

            axios.get(`${FETCH_RESTAURANTS_DETAILS}${ restaurant_id}`)
                .then(res => {
                    dispatch(loadRestaurantData(res.data))
                    dispatch(hideLoaderData())
                })
                .catch(err => {
                    console.log('oops err', err)
                })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantCollection)
