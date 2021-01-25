import React from 'react'
import CollectionContainer from '../../containers/CollectionContainer'
import CuisineContainer from '../../containers/CuisineContainer'
import SearchBarContainer from '../../containers/SearchBarContainer'
import Loader from '../Loader'

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
        this.props.getCityData(this.props.currentCity)
    }

    componentDidUpdate(prevProps){
        if(prevProps.currentCity !== this.props.currentCity){
            this.props.getCityData(this.props.currentCity)
        }
    }

    render(){
        const { showLoader } = this.props
        const cityName = this.props.currentCity
        return (
            <MainContainer>
                {showLoader && <Loader /> }
                <BackgroundContainer>
                    <BackgroundOpaqueEffect></BackgroundOpaqueEffect>
                    <TitleContainer>
                        <ImageContainer><Image src='https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png' /></ImageContainer>
                        <Title>Discover the best food & drinks in {cityName}</Title>
                        <SearchBarContainer />
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