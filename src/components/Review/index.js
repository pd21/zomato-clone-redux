import React from 'react'

import {getRating} from '../../constants/utils'

import {
    Main,
    Name,
    Subtitle,
    UserReviewContent,
    UserProfileContent,
    UserProfilePicture,
    UserName,
    Star,
    Rating,
    ReviewTime,
    Text,
    RatingStars,
} from './style'

class Review extends React.Component{
    render(){
        console.log('props review', this.props)
        const { restaurantName, reviewData } = this.props
        const  user_reviews  = reviewData && reviewData.user_reviews
        return(
            <Main>
                <Name>{restaurantName} Reviews</Name>
                {reviewData && 
                    <Subtitle>All Reviews ({reviewData.reviews_shown})</Subtitle>
                }
                {
                    user_reviews && user_reviews.map(item => {
                        return(
                        <UserReviewContent>
                            <UserProfileContent>
                                    <UserProfilePicture imageUrl={item.review.user.profile_image}/>
                                    <UserName>{item.review.user.name}</UserName>
                            </UserProfileContent>
                            <Star>
                                <RatingStars>{getRating(item.review.rating)}</RatingStars>
                                    <Rating>{item.review.rating.toFixed(1)}</Rating>
                                <ReviewTime>{item.review.review_time_friendly}</ReviewTime>
                            </Star>
                                <Text>{item.review.review_text}</Text>

                        </UserReviewContent>
                        )
                    })
                }
            </Main>
        )
    }
}

export default Review