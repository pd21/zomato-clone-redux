import React from 'react'

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
    render(){
        console.log('restaurant props', this.props)
        const { restaurants } = this.props
        return(
            <RestaurantCardContainer>
                {
                    restaurants && restaurants.map(item => {
                        return(
                            <Main>
                                {console.log('featured', item.restaurant.featured_image)}
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

export default RestaurantCard