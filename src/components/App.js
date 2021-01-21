import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import CityDetailContainer from '../containers/CityDetailContainer'
import RestaurantCollectionContainer from '../containers/RestaurantCollectionContainer'
import RestaurantDetailContainer from '../containers/RestaurantDetailContainer'

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Route path='/' exact render = {()=> <Redirect to='/Ranchi'/>}/>
        <Route path='/:city' exact component={CityDetailContainer} />
        <Route path='/:city/:collectionName' exact component={RestaurantCollectionContainer} />
        <Route path='/:city/restaurant/:restaurantName' exact component={RestaurantDetailContainer} />
      </div>
    )
  }
}

export default App;
