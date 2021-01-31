import React from 'react'
import {withRouter} from 'react-router-dom'
import { darkTheme , lightTheme } from '../../constants/theme'

import {
    NavbarMain,
    NavContent,
    Image,
    ImageContainer,
    SwitchTheme,
} from './style'

class Navbar extends React.Component{
    handleClickImage = () => {
        const cityName = this.props.currentCity
        this.props.history.push(`/${cityName}`)
    }

    handleThemeChange = () => {
        const { theme } = this.props
        if (theme.mode === 'light') {
            this.props.changeTheme(darkTheme)
        }
        else {
            this.props.changeTheme(lightTheme)
        }
    }

    
    render() {
        return (
            <NavbarMain>
                <NavContent>
                    <ImageContainer onClick={()=>this.handleClickImage()}>
                        <Image src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' /> 
                    </ImageContainer>
                    <SwitchTheme onClick={() => this.handleThemeChange()}>Switch Theme</SwitchTheme>
                </NavContent>
            </NavbarMain>
        )
    }
}

export default withRouter(Navbar)