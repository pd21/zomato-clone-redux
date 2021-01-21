import { connect } from 'react-redux'
import axios from 'axios'
import RestaurantDetail from '../components/RestaurantDetail'

import { loadReviewData,loadRestaurantData,showLoaderData, hideLoaderData } from '../actions'

import {
    FETCH_RESTAURANTS_DETAILS,
    FETCH_RESTAURANTS_REVIEW,
} from '../constants/api'

const mapStateToProps = (state) => {
    return state
}


const mapDispatchToProps = (dispatch) => {
    return {
       dataRestaurant: (restaurant_id) => {
            dispatch(showLoaderData())
            axios.get(`${FETCH_RESTAURANTS_DETAILS}${restaurant_id}`)
                .then(res => {
                    dispatch(loadRestaurantData(res.data))
                    dispatch(hideLoaderData())
                })
                .catch(err => {
                    console.log('oops err', err)
                })
        },
        dataReview: (restaurant_id) => {
            dispatch(showLoaderData())
            axios.get(`${FETCH_RESTAURANTS_REVIEW}${restaurant_id}`)
                .then(res => {
                    console.log('data', res.data)
                    dispatch(loadReviewData(res.data))
                    dispatch(hideLoaderData())
                })
                .catch(err => {
                    console.log('oops err', err)
                })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetail)