import React from 'react'
import { 
    RestaurantCollectionContainer,
    CollectionListContainer,
    BannerContainer,
    BannerOpaqueEffect,
    BannerTitle,
    Section,
    BannerDescription,
    ResultsFound,
    SectionRestaurants
} from './style';

import Navbar from '../Navbar'
import RestaurantCard from '../RestaurantCard'

class RestaurantCollection extends React.Component{
    render(){
        const { collectionDetail, restaurantCollection} = this.props
        const collectionData = restaurantCollection && restaurantCollection.collectionData
        return(
            <RestaurantCollectionContainer>
                <Navbar />
                {collectionDetail && restaurantCollection && <CollectionListContainer>
                    <BannerContainer imgUrl={collectionDetail.imgUrl}>
                        <BannerOpaqueEffect></BannerOpaqueEffect>
                        <Section>
                            <BannerTitle>{collectionDetail.title}</BannerTitle>
                            <BannerDescription>{collectionDetail.description}</BannerDescription>
                            <ResultsFound>{collectionData.results_shown} Place(s)</ResultsFound>
                        </Section>
                    </BannerContainer>
                    <SectionRestaurants>
                        <RestaurantCard restaurants={collectionData.restaurants} />
                    </SectionRestaurants>
                </CollectionListContainer>
                }
            </RestaurantCollectionContainer>
        )
    }
}

export default RestaurantCollection