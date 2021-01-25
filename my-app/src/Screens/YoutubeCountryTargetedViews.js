import React from 'react'
import Heroyt from '../Components/Heroyt'
import Pricing from '../Components/Pricing'

let data = [
    {
        title : 'package 1',price : '5.00', type : 'youtube',
        lists : [
            '1000 youtube views',
        ],
        url : ''
    },
    {
        title : 'package 2',price : '25.00', type : 'youtube',
        lists : [
            '5000 youtube views',
        ],
        url : ''
    },
    {
        title : 'package 3',price : '50.00', type : 'youtube',
        lists : [
            '10000 youtube views',
        ],
        url : ''
    },
    {
        title : 'package 4',price : '100.00', type : 'youtube',
        lists : [
            '20000 youtube views',
        ],
        url : ''
    },
    {
        title : 'package 5',price : '250.00', type : 'youtube',
        lists : [
            '50000 youtube views',
        ],
        url : ''
    },
]



let data1 = [
    {
        title : 'package 1',price : '500.00', type : 'youtube',
        lists : [
            '100000 youtube views',
        ],
            url : ''
    },
    {
        title : 'package 2',price : '1250.00', type : 'youtube',
        lists : [
            '250000 youtube High retention views',
        ],
            url : ''
    },
    {
        title : 'package 3',price : '2500.00', type : 'youtube',
        lists : [
            '500000 youtube views',
        ],
            url : ''
    },
    {
        title : 'package 4',price : '4500.00', type : 'youtube',
        lists : [
            '1 Million youtube views',
        ],
            url : ''
    },
]




class YoutubeCountryTargetedViews extends React.Component{


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
            <div className="pd44 youtube">
                 <Heroyt/>
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2">country <span className="my-red">targeted youtube</span> views</h2>
                        </div>
                    </div>

                    <div className="row">
                    <div className="col-12">
                        <Pricing data={data}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2">more country <span className="my-red">targeted youtube </span> views pack</h2>
                        </div>
                    </div>

                    <div className="row">
                    <div className="col-12">
                        <Pricing data={data1}/>
                        </div>
                    </div>

                </div>
               
            </div>
        )
    }
}

export default YoutubeCountryTargetedViews;