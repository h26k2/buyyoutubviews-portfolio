import React from 'react'
import Pricing from '../Components/Pricing'

let data = [
    {
        title : 'package 1',price : '2.00', type : 'instagram',
        lists : [
            '100 Instagram followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=100+Instagram+Followers&amount=2&lc=US&on0=Instagram+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '6.00', type : 'instagram',
        lists : [
            '300 Instagram followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=300+Instagram+Followers&amount=6&lc=US&on0=Instagram+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '10.00', type : 'instagram',
        lists : [
            '500 Instagram followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=500+Instagram+Followers&amount=10&lc=US&on0=Instagram+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 4',price : '15.00', type : 'instagram',
        lists : [
            '1000 Instagram followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=1000+Instagram+Followers&amount=15&lc=US&on0=Instagram+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 5',price : '30.00', type : 'instagram',
        lists : [
            '2000 Instagram followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=2000+Instagram+Followers&amount=30&lc=US&on0=Instagram+Url%3A&submit=Buy+Now&os0='
    },
]

let data1 = [
    {
        title : 'package 1',price : '45.00', type : 'instagram',
        lists : [
            '3000 Instagram followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=3000+Instagram+Followers&amount=45&lc=US&on0=Instagram+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '80.00', type : 'instagram',
        lists : [
            '5000 Instagram followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=5000+Instagram+Followers&amount=80&lc=US&on0=Instagram+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '150.00', type : 'instagram',
        lists : [
            '10000 Instagram followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=10000+Instagram+Followers&amount=150&lc=US&on0=Instagram+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 4',price : '280.00', type : 'instagram',
        lists : [
            '20000 Instagram followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=20000+Instagram+Followers&amount=280&lc=US&on0=Instagram+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 5',price : '350.00', type : 'instagram',
        lists : [
            '25000 Instagram followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=25000+Instagram+Followers&amount=350&lc=US&on0=Instagram+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 6',price : '700.00', type : 'instagram',
        lists : [
            '50000 Instagram followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=50000+Instagram+Followers&amount=700&lc=US&on0=Instagram+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 7',price : '1400.00', type : 'instagram',
        lists : [
            '100000 Instagram followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=100000+Followers&amount=1400&lc=US&on0=Instagram+Url%3A&submit=Buy+Now&os0='
    },
]



class InstagramFollowers extends React.Component{
    render(){
        return(
            <div className="instagram pd44">
                <div className="container">
                    
                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2"><span className="my-red">instagram</span> followers</h2>
                        </div>
                    </div>

                    <div className="row">
                        <Pricing data={data}/>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2">more <span className="my-red">instagram</span> followers</h2>
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

export default InstagramFollowers;