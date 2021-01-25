import React from 'react'

import {
    MainSearch,
    SearchContent,
    Title,
    Subtitle,
    SectionRestaurants,
} from './style'

import RestaurantCard from '../RestaurantCard'
import NavbarContainer from '../../containers/NavBarContainer'

class SearchPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            search_term: window.location.pathname.split('/')[2],
            city_id: window.location.pathname.split('/')[1],
        }
    }

    componentDidMount(){
        const { search_term, city_id } = this.state
        this.props.getSearchResults(city_id,search_term)
    }
    
    render(){
        const searchData = this.props && this.props.data && this.props.data.searchData
        const { search_term } = this.state
        return(
            <MainSearch>
                <NavbarContainer />
                {
                    searchData && 
                    <SearchContent>
                        <Title>Showing search results for {search_term}</Title>
                        <Subtitle>{searchData.results_shown} Place(s)</Subtitle>
                        <SectionRestaurants>
                            <RestaurantCard restaurants={searchData.restaurants}/>
                        </SectionRestaurants>
                    </SearchContent>
                }
            </MainSearch>
        )
    }
}

export default SearchPage