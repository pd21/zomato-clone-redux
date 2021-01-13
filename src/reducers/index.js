import getInitialState from '../store/initial-state'

export default function(state=getInitialState(), action){
    if (action.type === 'VIEW_COLLECTION') {
        return state
    }

    if (action.type === 'LOAD_CITY_DATA') {
        return {
            ...state,
            data : action.value
        }
    }

    return state
}