import React from 'react'
import { ThemeProvider } from 'styled-components'

import {
    MainSearch,
    SearchContent,
    Title,
    Subtitle,
    SectionRestaurants,
} from './style'

import RestaurantCard from '../RestaurantCard'
import NavbarContainer from '../../containers/NavBarContainer'
import Loader from '../Loader'

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
        const { showLoader,theme } = this.props
        const searchData = this.props && this.props.data && this.props.data.searchData
        const { search_term } = this.state
        return(
            <ThemeProvider theme={theme}>
                <MainSearch>
                    <NavbarContainer />
                    {showLoader && <Loader />}
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
            </ThemeProvider>
        )
    }
}

export default SearchPage