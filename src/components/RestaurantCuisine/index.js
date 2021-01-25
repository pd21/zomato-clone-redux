import React from 'react'
import {
    MainCuisine,
    CuisineContent,
    Banner,
    SectionRestaurants,
    Title,
    Section,
    NumberOfRestaurants
} from './style'

import NavbarContainer from '../../containers/NavBarContainer'
import RestaurantCard from '../RestaurantCard'
import Loader from '../Loader'

class RestaurantCuisine extends React.Component{

    componentDidMount(){
        const city_id = window.location.pathname.split('/')[2]
        const cuisine_id = window.location.pathname.split('/')[5]
        this.props.getRestaurantsBasedOnCuisines(city_id, cuisine_id)
    }

    render(){
        const showLoader = this.props.showLoader
        const collectionName = window.location.pathname.split('/')[4]
        const cuisineData = this.props && this.props.data && this.props.data.cuisineData

        console.log('props showLoader', this.props.showLoader)

        return (
            <MainCuisine>
                <NavbarContainer />
                {showLoader && <Loader />}
                {cuisineData && 
                    <CuisineContent>
                        <Banner>
                            <Section>
                                <Title>{collectionName}</Title>
                            <NumberOfRestaurants>{cuisineData.restaurants.length} places (s)</NumberOfRestaurants>
                            </Section>
                        </Banner>
                        <SectionRestaurants>
                            <RestaurantCard restaurants={cuisineData.restaurants} />
                        </SectionRestaurants>
                    </CuisineContent>
                }
            </MainCuisine>
        )
    }

}

export default RestaurantCuisine