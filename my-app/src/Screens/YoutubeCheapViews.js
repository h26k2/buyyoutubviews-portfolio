import React from 'react'
import Heroyt from '../Components/Heroyt'
import Pricing from '../Components/Pricing'

let data = [
    {
        title : 'package 1',price : '5.00', type : 'youtube',
        lists : [
            '1000 youtube views',
            'delivery time 2-3 days',
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=1000+Views&amount=5&lc=US&on0=YouTube+Url%3A&os0=&submit=Buy+Now'
    },
    {
        title : 'package 2',price : '15.00', type : 'youtube',
        lists : [
            '3000 youtube views',
            'delivery time 5-6 days',
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=3000+Views&amount=15&lc=US&on0=YouTube+Url%3A&os0=&submit=Buy+Now'
    },
    {
        title : 'package 3',price : '25.00', type : 'youtube',
        lists : [
            '5000 youtube views',
            'delivery time 7-9 days',
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=5000+Views&amount=25&lc=US&on0=YouTube+Url%3A&os0=&submit=Buy+Now'
    },
    {
        title : 'package 4',price : '50.00', type : 'youtube',
        lists : [
            '10000 youtube views',
            'delivery time 3-4 days',
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=10000+Views&amount=50&lc=US&on0=YouTube+Url%3A&os0=&submit=Buy+Now'
    },
    {
        title : 'package 5',price : '100.00', type : 'youtube',
        lists : [
            '20000 youtube views',
            'delivery time 3-4 days',
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=20000+Views&amount=100&lc=US&on0=YouTube+Url%3A&os0=&submit=Buy+Now'
    },
]


class YoutubeCheapViews extends React.Component{

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
                 
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2">youtube<span className="my-red"> cheap</span> views</h2>
                        </div>
                    </div>

                    <div className="row">
                    <div className="col-12">
                        <Pricing data={data}/>
                        </div>
                    </div>

                </div>
                <Heroyt/>
            </div>
        )
    }
}

export default YoutubeCheapViews;