import { connect } from 'react-redux'
import Navbar from '../components/Navbar'

import { switchTheme } from '../actions'

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) =>{
    return {
        changeTheme: (theme) => {
            dispatch(switchTheme(theme))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar)