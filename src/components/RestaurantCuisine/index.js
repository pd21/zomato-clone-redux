import React from 'react'
import {
    MainCuisine,
    CuisineContent,
} from './style'

import Navbar from '../Navbar'
import RestaurantCard from '../RestaurantCard'

class RestaurantCuisine extends React.Component{

    componentDidMount(){
        const city_id = window.location.pathname.split('/')[2]
        const cuisine_id = window.location.pathname.split('/')[5]
        this.props.getRestaurantsBasedOnCuisines(city_id, cuisine_id)
    }

    render(){
        const collectionName = window.location.pathname.split('/')[4]
        const cuisineData = this.props && this.props.data && this.props.data.cuisineData
        return (
            <MainCuisine>
                <Navbar />
                {cuisineData && 
                    <CuisineContent>
                        <RestaurantCard restaurants={cuisineData.restaurants} />
                    </CuisineContent>
                }
            </MainCuisine>
        )
    }

}

export default RestaurantCuisine