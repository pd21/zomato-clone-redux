export const loadCityData = value => ({
    type: 'LOAD_CITY_DATA',
    value,
})

export const loadRestaurantCollectionData = (value,title,imgUrl) => ({
    type: 'LOAD_RESTAURANT_COLLECTION_DATA',
    value,
    title,
    imgUrl,
})

export const showLoaderData = () => ({
    type: 'SHOW_LOADER'
})

export const hideLoaderData = () => ({
    type: 'HIDE_LOADER'
})