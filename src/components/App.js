import React from 'react'
import axios  from 'axios'

import CityDetailContainer from '../containers/CityDetailContainer'

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <CityDetailContainer />
      </div>
    )
  }
}

export default App;
