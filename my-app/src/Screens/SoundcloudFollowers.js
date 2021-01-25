import React from 'react'
import Pricing from '../Components/Pricing'

let data = [
    {
        title : 'package 1',price : '2.00', type : 'soundcloud',
        lists : [
            '100 followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=100+Soundcloud+Followers&amount=2&lc=US&on0=Soundcloud+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '3.00', type : 'soundcloud',
        lists : [
            '250   followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=250+Soundcloud+Followers&amount=3&lc=US&on0=Soundcloud+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '4.00', type : 'soundcloud',
        lists : [
            '500 followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=500+Soundcloud+Followers&amount=4&lc=US&on0=Soundcloud+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 4',price : '6.00', type : 'soundcloud',
        lists : [
            '1,000  followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=1000+Soundcloud+Followers&amount=6&lc=US&on0=Soundcloud+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 5',price : '12.00', type : 'soundcloud',
        lists : [
            '2,000  followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=2000+Soundcloud+Followers&amount=12&lc=US&on0=Soundcloud+Url%3A&submit=Buy+Now&os0='
    },
]


let data1 = [
    {
        title : 'package 1',price : '30.00', type : 'soundcloud',
        lists : [
            '5,000  followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=5000+Soundcloud+Followers&amount=30&lc=US&on0=Soundcloud+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '50.00', type : 'soundcloud',
        lists : [
            '10,000    followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=10000+Soundcloud+Followers&amount=50&lc=US&on0=Soundcloud+Url%3A&submit=Buy+Now&os0='
    },
]



class SoundcloudFollowers extends React.Component{

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
            <div className=" pd44 soundcloud">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2"><span className="my-red">soundcloud</span> followers</h2>
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
                            <h2 className="my-heading dh2">more<span className="my-red"> soundcloud</span> followers</h2>
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

export default SoundcloudFollowers;