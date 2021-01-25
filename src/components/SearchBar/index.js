import React from 'react'
import { withRouter } from 'react-router-dom'

import {
    MainSearch,
    CitySearch,
    RestaurantSearch,
    City,
    LocationIcon,
    SearchIcon,
    Restaurant,
} from './style'

class SearchBar extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            city: this.props.currentCity,
            searchTerm: '',
        }
    }


    componentDidUpdate(prevProps,prevState){
        if(prevState.city !== this.state.city){
            this.debounceFunction()
        }
    }

    handleChange = (event) => {
        this.setState({
            city: event.target.value,
        })
    }


    debounceFunction = () =>{
        clearTimeout(this.timeoutId)
        this.timeoutId = setTimeout(()=>{
            if(this.state.city){
                this.props.getCurrentCity(this.state.city)
                this.props.history.push(`${this.state.city}`)
            }
        }, 2000)
    }

    handleSearchRestaurant = (event) => {
        this.setState({
            searchTerm: event.target.value,
        })
    }

    handleClickSearch = () => {
        const searchTerm = this.state.searchTerm.split(' ').join('-')
        const city_id = this.props &&
                        this.props.data && 
                        this.props.data.locationSuggestions &&
                        this.props.data.locationSuggestions.id


        if(searchTerm){                
            this.props.history.push(`${city_id}/${searchTerm}`)
        }
    }

    render(){
        return(
            <MainSearch>
                <City>
                    <LocationIcon className="fas fa-map-marker-alt"></LocationIcon>
                    <CitySearch 
                        placeholder={this.props.currentCity}
                        onChange={(e)=>this.handleChange(e)}
                    />
                </City>
                <Restaurant>
                    <RestaurantSearch 
                        placeholder='Search for restaurant or cuisine'
                        onChange={(e)=>this.handleSearchRestaurant(e)}
                    />
                </Restaurant>
                <SearchIcon className="fas fa-search" onClick={()=> this.handleClickSearch()} />
                
            </MainSearch>
        )
    }
}

export default withRouter(SearchBar)