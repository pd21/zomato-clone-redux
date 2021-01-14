import React from 'react'
import Card from '../Card'

import {
    MainContainer,
    BackgroundContainer,
    TitleContainer,
    Title,
    ImageContainer,
    Image,
    CollectionContainer,
    SubContainer,
    CollectionSubtitleContainer,
    CollectionTitle,
    CollectionSubtitle,
    AllCollectionTitle,
    BackgroundOpaqueEffect,
} from './style'

class City extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getCityData()
    }

    render(){
        const { showLoader, data} = this.props
        return (
            <MainContainer>
                <BackgroundContainer>
                    <BackgroundOpaqueEffect></BackgroundOpaqueEffect>
                    <TitleContainer>
                        <ImageContainer><Image src='https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png' /></ImageContainer>
                        <Title>Discover the best food & drinks</Title>
                    </TitleContainer>
                </BackgroundContainer>
                <SubContainer>
                <CollectionContainer>
                    <CollectionTitle>Collections</CollectionTitle>
                    <CollectionSubtitleContainer>
                       <CollectionSubtitle>
                            Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends
                       </CollectionSubtitle>
                        <AllCollectionTitle href='/'>
                            All collections in Delhi NCR
                        </AllCollectionTitle>
                    </CollectionSubtitleContainer>
                    {!showLoader && data && <Card data={data && data[1].collections} /> }
                </CollectionContainer>
                </SubContainer>
            </MainContainer>
        )
    }
}

export default City