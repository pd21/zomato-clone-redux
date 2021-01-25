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

import RestaurantCard from '../RestaurantCard'
import NavbarContainer from '../../containers/NavBarContainer'
import Loader from '../Loader'

class RestaurantCollection extends React.Component{


    componentDidMount() {
        const city_id = window.location.pathname.split('/')[2]
        const collection_id = window.location.pathname.split('/')[4]
        this.props.getListOfRestaurants(city_id,collection_id)
    }


    render(){
        const { showLoader } = this.props
        const collectionName = window.location.pathname.split('/')[3]
        const collectionData = this.props && this.props.data && this.props.data.collectionData
        return(
            <RestaurantCollectionContainer>
                <NavbarContainer />
                {showLoader && <Loader />}
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