import { connect } from 'react-redux'
import axios from 'axios'
import RestaurantCuisine from '../components/RestaurantCuisine'

import { loadRestaurantCuisineData, showLoaderData, hideLoaderData } from '../actions'

import {
    FETCH_RESTAURANTS_CUISINE
} from '../constants/api'

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRestaurantsBasedOnCuisines(city_id,cuisine_id){
            dispatch(showLoaderData())
            axios.get(`${FETCH_RESTAURANTS_CUISINE}${city_id}/${cuisine_id}`)
                .then(res => {
                    dispatch(loadRestaurantCuisineData(res.data))
                    dispatch(hideLoaderData())
                })
                .catch(err => {
                    console.log('oops err', err)
                })

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantCuisine)