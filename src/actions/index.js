export const loadCityData = value => ({
    type: 'LOAD_CITY_DATA',
    value
})

export const loadRestaurantCollectionData = value => ({
    type: 'LOAD_RESTAURANT_COLLECTION_DATA',
    value
})

export const showLoaderData = () => ({
    type: 'SHOW_LOADER'
})

export const hideLoaderData = () => ({
    type: 'HIDE_LOADER'
})