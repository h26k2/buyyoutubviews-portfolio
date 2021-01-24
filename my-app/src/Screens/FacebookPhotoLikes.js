import React from 'react'
import Pricing from '../Components/Pricing'

let data = [
    {
        title : 'package 1',price : '2.00', type : 'facebook',
        lists : [
            '100 Post Likes',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=100+Facebook+Post+Likes&amount=2&lc=US&on0=Facebook+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '4.00', type : 'facebook',
        lists : [
            '200 Post Likes',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=200+Facebook+Post+Likes&amount=4&lc=US&on0=Facebook+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '8.00', type : 'facebook',
        lists : [
            '500 Post Likes',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=500+Facebook+Post+Likes&amount=8&lc=US&on0=Facebook+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 4',price : '15.00', type : 'facebook',
        lists : [
            '1000 Post Likes',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=1000+Facebook+Post+Likes&amount=15&lc=US&on0=Facebook+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 5',price : '30.00', type : 'facebook',
        lists : [
            '2000 Post Likes',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=2000+Facebook+Post+Likes&amount=30&lc=US&on0=Facebook+Url%3A&submit=Buy+Now&os0='
    },
]

let data1 = [
    {
        title : 'package 1',price : '75.00', type : 'facebook',
        lists : [
            '5000 Post Likes',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=5000+Facebook+Post+Likes&amount=75&lc=US&on0=Facebook+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '140.00', type : 'facebook',
        lists : [
            '10000 Post Likes',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=10000+Facebook+Post+Likes&amount=140&lc=US&on0=Facebook+Url%3A&submit=Buy+Now&os0='
    },
]



class FacebookPhotoLikes extends React.Component{


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
                            <h2 className="my-heading dh2"><span className="my-red">facebook</span> photo likes</h2>
                        </div>
                    </div>

                    <div className="row">
                        <Pricing data={data}/>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2">more <span className="my-red"> facebook</span> photo likes</h2>
                        </div>
                    </div>

                    <div className="row">
                        <Pricing data={data1}/>
                    </div>

                </div>
            </div>
        )
    }
}

export default FacebookPhotoLikes;