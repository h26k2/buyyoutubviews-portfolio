import React from 'react'
import Heroyt from '../Components/Heroyt'
import Intro from '../Components/Intro'
import WhyUs from '../Components/WhyUs'
import Testimonial from '../Components/Testimonial'

class Home extends React.Component{
    render(){
        return(
            <div className="app home">
                <Intro/>
                <Heroyt/>
                <WhyUs/>
                <Testimonial />
            </div>
        )
    }
}

export default Home;