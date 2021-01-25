import React from 'react'
import Pricing from '../Components/Pricing'

let data = [
    {
        title : 'package 1',price : '8.00', type : 'spotify',
        lists : [
            '1,000 followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=1000+Spotify+Followers&amount=8&lc=US&on0=Spotify+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '15.00', type : 'spotify',
        lists : [
            '2,000  followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=2000+Spotify+Followers&amount=15&lc=US&on0=Spotify+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '23.00', type : 'spotify',
        lists : [
            '3,000 followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=3000+Spotify+Followers&amount=23&lc=US&on0=Spotify+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 4',price : '35.00', type : 'spotify',
        lists : [
            '5,000 followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=5000+Spotify+Followers&amount=35&lc=US&on0=Spotify+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 5',price : '70.00', type : 'spotify',
        lists : [
            '10,000 followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=10000+Spotify+Followers&amount=70&lc=US&on0=Spotify+Url%3A&submit=Buy+Now&os0='
    },
]

let data1 = [
    {
        title : 'package 1',price : '100.00', type : 'spotify',
        lists : [
            '15,000  followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=15000+Spotify+Followers&amount=100&lc=US&on0=Spotify+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '120.00', type : 'spotify',
        lists : [
            '20,000   followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=20000+Spotify+Followers&amount=120&lc=US&on0=Spotify+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '230.00', type : 'spotify',
        lists : [
            '50,000  followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=50000+Spotify+Followers&amount=230&lc=US&on0=Spotify+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 4',price : '400.00', type : 'spotify',
        lists : [
            '100,000  followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=100000+Spotify+Followers&amount=400&lc=US&on0=Spotify+Url%3A&submit=Buy+Now&os0='
    },
]


class ShopifyFollowers extends React.Component{


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
                            <h2 className="my-heading dh2"><span className="my-red">spotify</span> followers</h2>
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
                            <h2 className="my-heading dh2">more  <span className="my-red"> spotify</span> packs</h2>
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

export default ShopifyFollowers;