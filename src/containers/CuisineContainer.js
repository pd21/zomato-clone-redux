import { connect } from 'react-redux'
import  Cuisine from '../components/Cuisine'


const mapStateToProps = (state) => {
    return {
        showLoader: state && state.showLoader,
        cuisines: state && state.data && state.data.cuisines,
        city_id: state && state.data && state.data.locationSuggestions && state.data.locationSuggestions.id
    }
}

export default connect(mapStateToProps, null)(Cuisine)