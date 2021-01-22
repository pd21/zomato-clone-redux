import React from 'react'
import { withRouter } from 'react-router-dom'

import {
    RestaurantCardContainer,
    RestaurantContent,
    Main,
    Details,
    Title,
    Rating,
    Locality,
    NumberOfRating,
    Cuisines,
    CardRating,
} from './style'

class RestaurantCard extends React.Component{

    handleClickRestaurantCard = (restaurant_id) => {
        const cityName = window.location.pathname.split('/')[1]
        this.props.history.push(`/${cityName}/restaurant/${restaurant_id}`)
    }

    render(){
        const { restaurants } = this.props
        return(
            <RestaurantCardContainer>
                {
                    restaurants && restaurants.map(item => {
                        return(
                            <Main onClick={() => this.handleClickRestaurantCard(item.restaurant.id)}>
                                <RestaurantContent imageUrl={item.restaurant.thumb}>
                                </RestaurantContent>
                                <Details>
                                    <Title>{item.restaurant.name}</Title>
                                </Details>
                                <Rating>
                                    <CardRating className='fa fa-star'></CardRating>
                                    {item.restaurant.user_rating.aggregate_rating} 
                                        <NumberOfRating>({item.restaurant.all_reviews_count})</NumberOfRating>
                                </Rating>
                                <Locality>{item.restaurant.location.locality}</Locality>
                                <Cuisines>{item.restaurant.cuisines}</Cuisines>
                            </Main>
                        )
                    })
                }
            </RestaurantCardContainer>
        )
    }
}

export default withRouter(RestaurantCard)