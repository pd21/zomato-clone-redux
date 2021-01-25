import React from 'react'

import NavbarContainer from '../../containers/NavBarContainer'
import Review from '../Review'

import {
    RestaurantContent,
    MainContent,
    RestaurantImage,
    RestaurantTitle,
    Locality,
    Timing,
    Opening,
    Time,
    SectionOverview,
    Section,
    Overview,
    AboutRestaurant,
    AboutTitle,
    Title,
    Cuisine,
    CuisineItem,
    AverageCost,
    InfoIcon,
    Highlights,
    HighlightInfoItem,
    Subtitle,
    Sub,
    Address,
    Pin,
    AddressContent,
    RestaurantReview,
} from './style'

class RestaurantDetail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            reviewActive : false,
            restaurant_id: window.location.pathname.split('/')[3],
        }
    }
    componentDidMount(){
        const { restaurant_id } = this.state
        this.props.dataRestaurant(restaurant_id)
        this.props.dataReview(restaurant_id)
    }

    handleClickReview = () => {
        this.setState({
            reviewActive: true,
        })
    }

    handleClickOverview = () => {
        this.setState({
            reviewActive: false,
        })
    }

    render(){
        const { reviewActive } = this.state
        const reviewData  = this.props && this.props.data && this.props.data.reviewData
        const restaurantData = this.props && this.props.data && this.props.data.restaurantData
        const cuisines = restaurantData && restaurantData.cuisines
        
        const cuisineArray = cuisines && cuisines.split(' ').join('').split(',')
        
        return(
            <MainContent>
                <NavbarContainer />
                {restaurantData && 
                    <RestaurantContent>
                        <RestaurantImage imageUrl={restaurantData.featured_image}/>
                        <Section>
                            <RestaurantTitle>{restaurantData.name}</RestaurantTitle>
                            <Locality>{restaurantData.location.locality}</Locality>
                            <Timing>
                                <Opening>Timing</Opening><Time>- {restaurantData.timings} </Time>
                            </Timing>
                            <SectionOverview>
                            <Overview onClick={() => this.handleClickOverview()} active={reviewActive}>
                                    Overview
                            </Overview>
                            <RestaurantReview onClick={() => this.handleClickReview()} active={reviewActive}>
                                    Reviews
                            </RestaurantReview>
                            </SectionOverview>
                        </Section>    
                        {!reviewActive && 
                            <AboutRestaurant>
                                <AboutTitle>About this place</AboutTitle>
                                <Title>Cuisines</Title>
                                    <Cuisine>
                                        {
                                            cuisineArray.map(item => {
                                                return(
                                                    <CuisineItem>{item}</CuisineItem>
                                                )
                                            })
                                            
                                        }
                                    </Cuisine>
                                <Title>Average Cost</Title>
                                    <AverageCost>{restaurantData.currency}{restaurantData.average_cost_for_two} for two people (approx.)</AverageCost>
                                    <AverageCost>Cash and Cards Accepted</AverageCost>
                                <Title>Highlights</Title>
                                    <Highlights>
                                        {
                                            restaurantData.highlights.map(item=>{
                                                return(
                                                    <HighlightInfoItem>
                                                        <InfoIcon className="fas fa-grin-stars"></InfoIcon>
                                                        {item}
                                                    </HighlightInfoItem>
                                                )
                                            })
                                        }   
                                    </Highlights>
                                <Title>More Info</Title>    
                                <Subtitle>
                                    <Sub>Is home delivery supported ?</Sub> 
                                    {restaurantData.has_online_delivery ? ' Yes': ' No'}
                                </Subtitle>
                                <Subtitle>
                                    <Sub>Is table reservation supported ? </Sub>
                                    {restaurantData.is_table_reservation_supported ? ' Yes' : ' No'}
                                </Subtitle>
                                <Subtitle>
                                    <Sub>Is delivering now ?</Sub>
                                    {restaurantData.is_delivering_now ? ' Yes' : ' No'}
                                </Subtitle>
                            
                            <Title>Address Details</Title>
                            <AddressContent>
                                <Address>{restaurantData.location.address}</Address>
                                <Pin>{restaurantData.location.zipcode}</Pin>
                            </AddressContent>
                            <Title>Contact Details</Title>
                            <Subtitle>{restaurantData.phone_numbers}</Subtitle>
                        </AboutRestaurant>}
                        {
                        reviewActive && <Review reviewData={reviewData} restaurantName={restaurantData.name} />
                        }
                    </RestaurantContent>
                }
            </MainContent>
            
        )
    }
}

export default RestaurantDetail