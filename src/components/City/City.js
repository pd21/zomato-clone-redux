import React from 'react'
import CollectionContainer from '../../containers/CollectionContainer'
import CuisineContainer from '../../containers/CuisineContainer'
import SearchBarContainer from '../../containers/SearchBarContainer'
import Loader from '../Loader'
import { darkTheme, lightTheme } from '../../constants/theme'
import { ThemeProvider } from 'styled-components'

import {
    MainContainer,
    BackgroundContainer,
    TitleContainer,
    Title,
    ImageContainer,
    Image,
    SubContainer,
    BackgroundOpaqueEffect,
    SwitchTheme,
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

    handleThemeChange = () => {
        const { theme } = this.props
        if(theme.mode === 'light'){
            this.props.changeTheme(darkTheme)
        }
        else{
            this.props.changeTheme(lightTheme)
        }
    }

    render(){
        const { showLoader } = this.props
        const cityName = this.props.currentCity
        const theme = this.props.theme.mode === 'light' ? lightTheme : darkTheme
        return (
            <ThemeProvider theme={theme}>
                <MainContainer>
                    {showLoader && <Loader /> }
                    <BackgroundContainer>
                        <BackgroundOpaqueEffect></BackgroundOpaqueEffect>
                        <SwitchTheme onClick={()=>this.handleThemeChange()}>Switch Theme</SwitchTheme>
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
            </ThemeProvider>
        )
    }
}

export default City