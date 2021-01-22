import React from 'react'
import Intro from '../Components/Intro'
import Slider from '../Components/Slider'

class Home extends React.Component{
    render(){
        return(
            <div className="app home">
                <Slider />
                <Intro/>
            </div>
        )
    }
}

export default Home;