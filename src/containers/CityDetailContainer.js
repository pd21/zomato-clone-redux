import { connect }  from 'react-redux'
import axios from 'axios'
import City from '../components/City/City'
import { loadCityData, switchTheme, showLoaderData, hideLoaderData } from '../actions'


import {
    FETCH_CITY_COLLECTION_CUISINE
} from '../constants/api'

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCityData: (cityName) => {
            dispatch(showLoaderData())
            // const cityName = window.location.pathname.split('/')[1]
            axios.get(`${FETCH_CITY_COLLECTION_CUISINE}${cityName}`)
                .then(res => {
                    dispatch(loadCityData(res.data))

                    dispatch(hideLoaderData())  
                })
                .catch(err=>{
                    console.log('oops err', err)
                })
        },
        changeTheme: (theme) => {
            dispatch(switchTheme(theme))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(City)