import { connect } from 'react-redux'
import Collection from '../components/Collection'

import axios from 'axios'

const mapStateToProps = (state) => {
    return {
        showLoader: state && state.showLoader,
        collections: state && state.data && state.data.collections
    }
}

export default connect(mapStateToProps,null)(Collection)