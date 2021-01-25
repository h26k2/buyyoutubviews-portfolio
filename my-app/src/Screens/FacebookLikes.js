import React from 'react'
import Pricing from '../Components/Pricing'

let data = [
    {
        title : 'package 1',price : '20.00', type : 'facebook',
        lists : [
            '500 Likes',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=500+Facebook+Likes&amount=20&lc=US&on0=Facebook+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '35.00', type : 'facebook',
        lists : [
            '1000   Likes',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=1000+Facebook+Likes&amount=35&lc=US&on0=Facebook+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '70.00', type : 'facebook',
        lists : [
            '2000  Likes',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=2000+Facebook+Likes&amount=70&lc=US&on0=Facebook+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 4',price : '160.00', type : 'facebook',
        lists : [
            '5000  Likes',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=5000+Facebook+Likes&amount=160&lc=US&on0=Facebook+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 5',price : '300.00', type : 'facebook',
        lists : [
            '10000  Likes',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=10000+Facebook+Likes&amount=300&lc=US&on0=Facebook+Url%3A&submit=Buy+Now&os0='
    },
]

let data1 = [
    {
        title : 'package 1',price : '550.00', type : 'facebook',
        lists : [
            '20000 Likes',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=20000+Facebook+Likes&amount=550&lc=US&on0=Facebook+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '1100.00', type : 'facebook',
        lists : [
            '50000 Likes',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=50000+Facebook+Likes&amount=1100&lc=US&on0=Facebook+Url%3A&submit=Buy+Now&os0='
    },
]



class FacebookLikes extends React.Component{


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
            <div className="facebook pd44">
                <div className="container">
                    
                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2"><span className="my-red">facebook</span> likes</h2>
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
                            <h2 className="my-heading dh2">more <span className="my-red"> facebook</span> likes</h2>
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

export default FacebookLikes;