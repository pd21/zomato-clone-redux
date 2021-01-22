import React from 'react'
import { withRouter } from 'react-router-dom'

import {
    EstablishmentContainer,
    EstablishmentItemContainer,
    Title,
    Main,
} from './style'

class Cuisine extends React.Component{

    handleClickCard = (cuisinename, cuisineId, cityName) => {
        const cuisine_name = cuisinename.split(' ').join('-')
        const city_id = this.props.city_id
        this.props.history.push(`/${cityName}/${city_id}/cuisine/${cuisine_name}/${cuisineId}`)
    }

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
                            <EstablishmentItemContainer onClick={() => this.handleClickCard(item.cuisine.cuisine_name, item.cuisine.cuisine_id, cityName)}>
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

export default withRouter(Cuisine)