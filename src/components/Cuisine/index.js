import React from 'react'

import {
    EstablishmentContainer,
    EstablishmentItemContainer,
    Title,
    Main,
} from './style'

class Cuisine extends React.Component{
    render(){
        const { cuisines } = this.props
        const cityName = window.location.pathname.split('/')[1]
        return(
            <Main>
            <Title>Popular cuisines in and around {cityName}</Title>
            <EstablishmentContainer>
                {
                    cuisines && cuisines.map(item => {
                        return(
                            <EstablishmentItemContainer>
                                {item.cuisine.cuisine_name}
                            </EstablishmentItemContainer>
                        )
                    })
                }
            </EstablishmentContainer>
            </Main>
        )
    }
}

export default Cuisine