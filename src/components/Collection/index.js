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
    constructor(props) {
        super(props)
    }

    render(){
        const { showLoader, data, cityName } = this.props
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
                {!showLoader && data && <Card data={data && data[1].collections} />}
            </CollectionContainer>
        )
    }
}

export default Collection