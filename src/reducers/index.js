import getInitialState from '../store/initial-state'

export default function(state=getInitialState(), action){
    if (action.type === 'VIEW_COLLECTION') {
        return state
    }

    if (action.type === 'LOAD_CITY_DATA') {
        console.log('state now', state)
        return {
            ...state,
            data : action.value,
        }
    }

    if(action.type === 'SHOW_LOADER') {
        return {
            ...state,
            showLoader: true,
        }
    }

    if (action.type === 'HIDE_LOADER') {
        return {
            ...state,
            showLoader: false,
        }
    }

    return state
}