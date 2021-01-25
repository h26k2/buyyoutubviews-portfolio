import React from 'react'
import Heroyt from '../Components/Heroyt'
import Pricing from '../Components/Pricing'

let data = [
    {
        title : 'package 1',price : '9.00', type : 'youtube',
        lists : [
            '100 youtube Likes',
            'Delivery Time After Order starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=100+Youtube+Likes&amount=9&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '23.00', type : 'youtube',
        lists : [
            '250 youtube Likes',
            'Delivery Time After Order starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=250+Youtube+Likes&amount=23&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '45.00', type : 'youtube',
        lists : [
            '500 youtube Likes',
            'Delivery Time After Order starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=500+Youtube+Likes&amount=45&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 4',price : '80.00', type : 'youtube',
        lists : [
            '1000 youtube Likes',
            'Delivery Time After Order starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=1000+Youtube+Likes&amount=80&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 5',price : '150.00', type : 'youtube',
        lists : [
            '2000 youtube Likes',
            'Delivery Time After Order starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=2000+Youtube+Likes&amount=150&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
]



let data1 = [
    {
        title : 'package 1',price : '350.00', type : 'youtube',
        lists : [
            '5000 youtube likes',
            'Delivery Time After order starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=5000+Youtube+Likes&amount=350&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '600.00', type : 'youtube',
        lists : [
            '10000 youtube likes',
            'Delivery Time After order starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=10000+Youtube+Likes&amount=600&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
]




class YoutubeLikes extends React.Component{

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
            <div className=" pd44 youtube">
                 <Heroyt/>
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2"><span className="my-red">youtube</span> likes</h2>
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
                            <h2 className="my-heading dh2">more <span className="my-red">youtube</span> likes</h2>
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

export default YoutubeLikes;