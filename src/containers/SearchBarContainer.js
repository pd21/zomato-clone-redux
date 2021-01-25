import { connect } from 'react-redux'
import axios from 'axios'
import SearchBar from '../components/SearchBar'

import { changeCity , showLoaderData, hideLoaderData } from '../actions'

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentCity: (city_name) => {
            dispatch(changeCity(city_name))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar)