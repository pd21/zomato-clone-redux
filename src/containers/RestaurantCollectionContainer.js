import { connect } from 'react-redux'
import axios from 'axios'
import RestaurantCollection from '../components/RestaurantCollection'

import { loadRestaurantCollectionData, showLoaderData, hideLoaderData} from '../actions'

import {
    FETCH_RESTAURANTS_COLLECTION
} from '../constants/api'

const mapStateToProps = (state) => {
    return state
}
const mapDispatchToProps = (dispatch) => {
    return {
        getListOfRestaurants(city_id,collection_id) {
            dispatch(showLoaderData())
            axios.get(`${FETCH_RESTAURANTS_COLLECTION}${city_id}/${collection_id}`)
                .then(res => {
                    dispatch(loadRestaurantCollectionData(res.data))
                    dispatch(hideLoaderData())
                })
                .catch(err => {
                    console.log('oops err', err)
                })
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantCollection)
