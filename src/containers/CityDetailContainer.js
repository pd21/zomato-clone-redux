import { connect }  from 'react-redux'
import City from '../components/City'
import { loadCityData } from '../actions'
import axios from 'axios'

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCityData() {
            axios.get('http://localhost:8000/api/v1/city/bengaluru')
                .then(res => {
                    dispatch(loadCityData(res.data))
                })
                .catch(err=>{
                    console.log('oops err', err)
                })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(City)