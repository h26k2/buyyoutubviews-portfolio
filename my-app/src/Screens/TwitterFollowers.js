import React from 'react'
import Pricing from '../Components/Pricing'

let data = [
    {
        title : 'package 1',price : '10.00', type : 'twitter',
        lists : [
            '100  followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=100+Twitter+Followers&amount=10&lc=US&on0=Twitter+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '25.00', type : 'twitter',
        lists : [
            '250   followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=250+Twitter+Followers&amount=25&lc=US&on0=Twitter+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '45.00', type : 'twitter',
        lists : [
            '500  followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=500+Twitter+Followers&amount=45&lc=US&on0=Twitter+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 4',price : '80.00', type : 'twitter',
        lists : [
            '1000  followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=1000+Twitter+Followers&amount=80&lc=US&on0=Twitter+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 5',price : '350.00', type : 'twitter',
        lists : [
            '5000  followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=5000+Twitter+Followers&amount=350&lc=US&on0=Twitter+Url%3A&submit=Buy+Now&os0='
    },
]

let data1 = [
    {
        title : 'package 1',price : '600.00', type : 'twitter',
        lists : [
            '10000   followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=10000+Twitter+Followers&amount=600&lc=US&on0=Twitter+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '1100.00', type : 'twitter',
        lists : [
            '15000    followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=15000+Twitter+Followers&amount=1100&lc=US&on0=Twitter+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '1500.00', type : 'twitter',
        lists : [
            '20000   followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=20000+Twitter+Followers&amount=1500&lc=US&on0=Twitter+Url%3A&submit=Buy+Now&os0='
    },
]



class TwitterFollowers extends React.Component{
    render(){
        return(
            <div className="shopify-followers pd44">
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2"><span className="my-red">twitter</span> followers</h2>
                        </div>
                    </div>

                    <div className="row">
                        <Pricing data={data}/>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2">more <span className="my-red">twitter</span> followers</h2>
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

export default TwitterFollowers;