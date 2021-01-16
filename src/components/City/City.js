import React from 'react'
import CollectionContainer from '../../containers/CollectionContainer'
import CuisineContainer from '../../containers/CuisineContainer'

import {
    MainContainer,
    BackgroundContainer,
    TitleContainer,
    Title,
    ImageContainer,
    Image,
    SubContainer,
    BackgroundOpaqueEffect,
} from './style'

class City extends React.Component{
    componentDidMount(){
        this.props.getCityData()
    }

    render(){
        const { showLoader } = this.props
        const cityName = window.location.pathname.split('/')[1]
        return (
            <MainContainer>
                <BackgroundContainer>
                    <BackgroundOpaqueEffect></BackgroundOpaqueEffect>
                    <TitleContainer>
                        <ImageContainer><Image src='https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png' /></ImageContainer>
                        <Title>Discover the best food & drinks in {cityName}</Title>
                    </TitleContainer>
                </BackgroundContainer>
                <SubContainer>
                    {!showLoader && <CollectionContainer />}
                    {!showLoader && <CuisineContainer />}
                </SubContainer>
            </MainContainer>
        )
    }
}

export default City