import React from 'react'
import { withRouter } from 'react-router-dom'

import {
    CardContainer,
    CardItemContainer,
    CardOpaqueEffect,
    CardTitle,
} from './style'

class Card extends React.Component{
    handleClickCard = (city_id, collection_id, collection_title, collection_imgUrl,collection_description) => {
        const { cityName} = this.props;
        const collectionTitle = collection_title.split(' ').join('-')

        this.props.history.push(`/${cityName}/${collectionTitle}`)
        this.props.getListOfRestaurants(
            city_id, 
            collection_id,
            collection_title,
            collection_imgUrl,
            collection_description
        )
    }
    render(){
        const { data, cityId} = this.props
        console.log('props here', this.props)
        const cardData = data && data.slice(0,8)
        return(
            <CardContainer>
               {
                    cardData && cardData.map(item => {
                        return (
                            <CardItemContainer 
                                imgUrl={item.collection.image_url}
                                onClick={() => this.handleClickCard(
                                    cityId,
                                    item.collection.collection_id,
                                    item.collection.title,
                                    item.collection.image_url,
                                    item.collection.description,
                                )}
                            >
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

export default withRouter(Card)