import React from 'react'
import {withRouter} from 'react-router-dom'

import SearchBarContainer from '../../containers/SearchBarContainer'

import {
    NavbarMain,
    NavContent,
    Image,
    ImageContainer,
} from './style'

class Navbar extends React.Component{
    handleClickImage = () => {
        
        const cityName = this.props.currentCity
        this.props.history.push(`/${cityName}`)
    }
    
    render() {
        console.log('nav', this.props)
        return (
            <NavbarMain>
                <NavContent>
                    <ImageContainer onClick={()=>this.handleClickImage()}>
                        <Image src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' /> 
                    </ImageContainer>
                </NavContent>
            </NavbarMain>
        )
    }
}

export default withRouter(Navbar)