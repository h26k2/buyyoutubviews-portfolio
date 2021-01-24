import React from 'react'
import Heroyt from '../Components/Heroyt'
import Intro from '../Components/Intro'
import WhyUs from '../Components/WhyUs'
import Testimonial from '../Components/Testimonial'

class Home extends React.Component{

    componentDidMount(){
        
        document.body.removeChild(document.getElementById('h26k2'));
        let js = document.createElement('script');
        js.setAttribute('id','h26k2');
        js.innerHTML = `$(".owl-carousel").owlCarousel({margin:10,nav:true,responsiveClass : true , responsive:{
            0:{
                items:1,
                nav : true
            },
            600:{
                items:2,
                nav : true
            },
            1100:{
                items:3,
                nav : true
            }
        }});`;
        document.body.appendChild(js);

    }


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