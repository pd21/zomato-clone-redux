import { connect } from 'react-redux'
import Collection from '../components/Collection'
import { loadRestaurantCollectionData, showLoaderData, hideLoaderData} from '../actions'

import axios from 'axios'

import {
    FETCH_RESTAURANTS_COLLECTION
} from '../constants/api'


const mapStateToProps = (state) => {
    return {
        showLoader: state && state.showLoader,
        cityId: state && state.data && state.data.locationSuggestions && state.data.locationSuggestions.id,
        collections: state && state.data && state.data.collections
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Collection)