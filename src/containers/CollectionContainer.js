import { connect } from 'react-redux'
import Collection from '../components/Collection'


const mapStateToProps = (state) => {
    return {
        showLoader: state && state.showLoader,
        cityId: state && state.data && state.data.locationSuggestions && state.data.locationSuggestions.id,
        collections: state && state.data && state.data.collections,
        currentCity: state && state.currentCity,
        theme: state && state.theme,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Collection)