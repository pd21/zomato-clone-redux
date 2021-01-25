import { connect } from 'react-redux'
import axios from 'axios'
import SearchPage from '../components/SearchPage'
import { showSearchData, showLoaderData, hideLoaderData } from '../actions'

import {
    FETCH_SEARCH_RESULTS
} from '../constants/api'

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSearchResults(city_id,search_term) {
            dispatch(showLoaderData())
            axios.get(`${FETCH_SEARCH_RESULTS}${city_id}/${search_term}`)
                .then(res => {
                    dispatch(showSearchData(res.data))

                    dispatch(hideLoaderData())

                })
                .catch(err => {
                    console.log('oops err', err)
                })
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SearchPage)