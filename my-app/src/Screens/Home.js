import React from 'react'
import Heroyt from '../Components/Heroyt'
import Intro from '../Components/Intro'
import WhyUs from '../Components/WhyUs'
import Testimonial from '../Components/Testimonial'
import Pricing from '../Components/Pricing'

class Home extends React.Component{
    render(){
        return(
            <div className="app home">
                <Intro/>
                <Heroyt/>
                <WhyUs/>
                <Testimonial />
                <Pricing />
            </div>
        )
    }
}

export default Home;