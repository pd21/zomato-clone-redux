import React from 'react'
import Collection from '../Collection'
import Cuisine from '../Cuisine'

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
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getCityData()
    }

    render(){
        const { showLoader, data} = this.props
        const establishment = data && data[2].cuisines
        const cityName = data && data[0].locationSuggestions.name
        console.log('est', establishment)
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
                    {!showLoader && <Collection data={data} showLoader={showLoader} cityName={cityName}/>}
                    {!showLoader && <Cuisine data={establishment} cityName={cityName}/>}
                </SubContainer>
            </MainContainer>
        )
    }
}

export default City