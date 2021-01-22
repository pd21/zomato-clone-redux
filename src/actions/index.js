export const loadCityData = value => ({
    type: 'LOAD_CITY_DATA',
    value,
})

export const loadRestaurantCollectionData = (value) => ({
    type: 'LOAD_RESTAURANT_COLLECTION_DATA',
    value,
})

export const loadRestaurantCuisineData = (value) => ({
    type: 'LOAD_RESTAURANT_CUISINE_DATA',
    value,
})

export const loadRestaurantData = (value) => ({
    type: 'LOAD_RESTAURANT_DATA',
    value,
})

export const loadReviewData = (value) => ({
    type: 'LOAD_REVIEW_DATA',
    value,
})

export const showLoaderData = () => ({
    type: 'SHOW_LOADER'
})

export const hideLoaderData = () => ({
    type: 'HIDE_LOADER'
})