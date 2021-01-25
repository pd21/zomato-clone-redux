import getInitialState from '../store/initial-state'

export default function(state=getInitialState(), action){
    if (action.type === 'LOAD_CITY_DATA') {
        return {
            ...state,
            data : action.value,
        }
    }

    if (action.type === 'LOAD_RESTAURANT_COLLECTION_DATA'){
        return {
            ...state,
            data: action.value
        }
    }

    if (action.type === 'LOAD_RESTAURANT_CUISINE_DATA'){
        return {
            ...state,
            data: action.value,
        }
    }

    if (action.type === 'LOAD_RESTAURANT_DATA') {
        return {
            ...state,
            data : action.value,
        }
    }

    if (action.type === 'LOAD_REVIEW_DATA') {
        state.data.reviewData = action.value.reviewData
        return {
            ...state,
        }
    }

    if (action.type === 'CHANGE_CITY') {
        return {
            ...state,
            currentCity: action.value,
        }
    }

    if (action.type === 'SHOW_SEARCH_RESULTS') {
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