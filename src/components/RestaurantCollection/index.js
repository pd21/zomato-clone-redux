import React from 'react'
import { RestaurantCollectionContainer } from './style';

class RestaurantCollection extends React.Component{
    render(){
        console.log('props in this page', this.props)
        return(
            <RestaurantCollectionContainer>
                collections
            </RestaurantCollectionContainer>
        )
    }
}

export default RestaurantCollection