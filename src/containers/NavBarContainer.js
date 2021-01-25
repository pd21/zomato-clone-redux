import { connect } from 'react-redux'
import axios from 'axios'
import Navbar from '../components/Navbar'
import { showLoaderData, hideLoaderData } from '../actions'

import {
    FETCH_SEARCH_RESULTS
} from '../constants/api'

const mapStateToProps = (state) => {
    return state
}


export default connect(mapStateToProps, null)(Navbar)