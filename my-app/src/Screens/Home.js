import React from 'react'
import Footer from '../Components/Footer'
import Heroyt from '../Components/Heroyt'
import Intro from '../Components/Intro'
import Slider from '../Components/Slider'
import WhyUs from '../Components/WhyUs'
import Testimonial from '../Components/Testimonial'

class Home extends React.Component{
    render(){
        return(
            <div className="app home">
                <Slider />
                <Intro/>
                <Heroyt/>
                <WhyUs/>
                <Testimonial />
                <Footer/>
            </div>
        )
    }
}

export default Home;