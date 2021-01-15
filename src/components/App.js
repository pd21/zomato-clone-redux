import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import CityDetailContainer from '../containers/CityDetailContainer'

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Route path='/' exact render = {()=> <Redirect to='/Ranchi'/>}/>
        <Route path='/:city' exact component={CityDetailContainer} />
      </div>
    )
  }
}

export default App;
