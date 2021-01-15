import React from 'react'

import {
    CardContainer,
    CardItemContainer,
    CardOpaqueEffect,
    CardTitle,
} from './style'

class Card extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        const { data } = this.props
        const cardData = data && data.slice(0,8)
        return(
            <CardContainer>
               {
                    cardData && cardData.map(item => {
                        return (
                            <CardItemContainer imgUrl={item.collection.image_url}>
                                <CardOpaqueEffect></CardOpaqueEffect>
                                <CardTitle>{item.collection.title}</CardTitle>
                            </CardItemContainer>
                        )
                    })
               }

            </CardContainer>
        )
    }
}

export default Card