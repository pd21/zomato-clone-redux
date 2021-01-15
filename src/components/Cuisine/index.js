import React from 'react'

import {
    EstablishmentContainer,
    EstablishmentItemContainer,
    Title,
    Main,
} from './style'

class Cuisine extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        console.log('here is the prop', this.props)
        const { data, cityName} = this.props
        return(
            <Main>
            <Title>Popular cuisines in and around {cityName}</Title>
            <EstablishmentContainer>
                {
                    data && data.map(item => {
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