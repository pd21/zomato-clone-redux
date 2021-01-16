import React from 'react'

import {
    CollectionContainer,
    CollectionSubtitleContainer,
    CollectionTitle,
    CollectionSubtitle,
    AllCollectionTitle,
} from './style'

import Card from '../Card'

class Collection extends React.Component{
    render(){
        const { showLoader, collections } = this.props
        const cityName = window.location.pathname.split('/')[1]
        return(
            <CollectionContainer>
                <CollectionTitle>Collections</CollectionTitle>
                <CollectionSubtitleContainer>
                    <CollectionSubtitle>
                        Explore curated lists of top restaurants, cafes, pubs, and bars in {cityName}, based on trends
                       </CollectionSubtitle>
                    <AllCollectionTitle href='/'>
                        All collections in {cityName}
                    </AllCollectionTitle>
                </CollectionSubtitleContainer>
                {!showLoader && collections && <Card data={collections} />}
            </CollectionContainer>
        )
    }
}

export default Collection