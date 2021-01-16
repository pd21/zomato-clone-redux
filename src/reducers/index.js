import getInitialState from '../store/initial-state'

export default function(state=getInitialState(), action){
    if (action.type === 'LOAD_CITY_DATA') {
        return {
            ...state,
            data : action.value,
        }
    }

    if (action.type === 'LOAD_RESTAURANT_COLLECTION_DATA'){
        state.data.restaurantCollection = action.value
        return {
            ...state,
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