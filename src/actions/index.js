export const loadCityData = value => ({
    type: 'LOAD_CITY_DATA',
    value
})

export const showLoader = () => ({
    type: 'SHOW_LOADER'
})

export const hideLoader = () => ({
    type: 'HIDE_LOADER'
})