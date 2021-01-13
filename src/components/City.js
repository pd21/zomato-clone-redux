import React from 'react'

class City extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getCityData()
    }

    render(){
        console.log(this.props)
        return (
            <div>
                here you will gte the city details
            </div>
        )
    }
}

export default City