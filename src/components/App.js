import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import CityDetailContainer from '../containers/CityDetailContainer'
import RestaurantCollectionContainer from '../containers/RestaurantCollectionContainer'
import RestaurantDetailContainer from '../containers/RestaurantDetailContainer'
import RestaurantCuisineContainer from '../containers/RestaurantCuisineContainer'
import SearchPageContainer from '../containers/SearchPageContainer'

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Route path='/' exact render={() => <Redirect to='/Bengaluru'/>}/>
        <Route path='/:city' exact component={CityDetailContainer} />
        <Route path='/:city/:cityId/:collectionName/:collectionId' exact component={RestaurantCollectionContainer} />
        <Route path='/:city/restaurant/:restaurantId' exact component={RestaurantDetailContainer} />
        <Route path='/:city/:cityId/cuisine/:cuisineName/:cuisineId' exact component={RestaurantCuisineContainer} />
        <Route path='/:cityId/:searchTerm' exact component={SearchPageContainer}/>
      </div>
    )
  }
}

export default App;
