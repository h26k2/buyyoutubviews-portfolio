import React from 'react'
import Pricing from '../Components/Pricing'

let data = [
    {
        title : 'package 1',price : '3.00', type : 'spotify',
        lists : [
            '1,000 Plays',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=1000+Spotify+Plays&amount=3&lc=US&on0=Spotify+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '9.00', type : 'spotify',
        lists : [
            '3,000  Plays',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=3000+Spotify+Plays&amount=9&lc=US&on0=Spotify+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '15.00', type : 'spotify',
        lists : [
            '5,000 Plays',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=5000+Spotify+Plays&amount=15&lc=US&on0=Spotify+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 4',price : '30.00', type : 'spotify',
        lists : [
            '10,000 Plays',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=10000+Spotify+Plays&amount=30&lc=US&on0=Spotify+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 5',price : '60.00', type : 'spotify',
        lists : [
            '20,000 Plays',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=20000+Spotify+Plays&amount=60&lc=US&on0=Spotify+Url%3A&submit=Buy+Now&os0='
    },
]

let data1 = [
    {
        title : 'package 1',price : '125.00', type : 'spotify',
        lists : [
            '50,000  followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=50000+Spotify+Plays&amount=125&lc=US&on0=Spotify+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '230.00', type : 'spotify',
        lists : [
            '100,000  followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=100000+Spotify+Plays&amount=230&lc=US&on0=Spotify+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '500.00', type : 'spotify',
        lists : [
            '250,000   followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=250000+Spotify+Plays&amount=500&lc=US&on0=Spotify+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 4',price : '950.00', type : 'spotify',
        lists : [
            '500,000  followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=500000+Spotify+Plays&amount=950&lc=US&on0=Spotify+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 4',price : '1700.00', type : 'spotify',
        lists : [
            '1 Million  followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=1+Million+Spotify+Plays&amount=1700&lc=US&on0=Spotify+Url%3A&submit=Buy+Now&os0='
    }
]



class ShopifyPlays extends React.Component{

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
            <div className="spotify pd44">
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2"><span className="my-red">spotify</span> plays</h2>
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
                            <h2 className="my-heading dh2">more <span className="my-red">spotify</span> packs</h2>
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

export default ShopifyPlays;