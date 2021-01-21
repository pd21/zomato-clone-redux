import React from 'react'
import { 
    RestaurantCollectionContainer,
    CollectionListContainer,
    BannerContainer,
    BannerOpaqueEffect,
    BannerTitle,
    Section,
    ResultsFound,
    SectionRestaurants
} from './style';

import Navbar from '../Navbar'
import RestaurantCard from '../RestaurantCard'

class RestaurantCollection extends React.Component{


    componentDidMount() {
        const city_id = window.location.pathname.split('/')[2]
        const collection_id = window.location.pathname.split('/')[4]
        this.props.getListOfRestaurants(city_id,collection_id)
    }


    render(){
        console.log('props', this.props)
        const collectionName = window.location.pathname.split('/')[3]
        const collectionData = this.props && this.props.data && this.props.data.collectionData
        return(
            <RestaurantCollectionContainer>
                <Navbar />
                {collectionData &&
                    <CollectionListContainer>
                        <BannerContainer>
                            <BannerOpaqueEffect></BannerOpaqueEffect>
                            <Section>
                                <BannerTitle>{collectionName}</BannerTitle>
                                <ResultsFound>{collectionData.restaurants.length} places (s)</ResultsFound>
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