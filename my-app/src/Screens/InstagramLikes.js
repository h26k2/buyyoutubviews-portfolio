import React from 'react'
import Pricing from '../Components/Pricing'

let data = [
    {
        title : 'package 1',price : '2.00', type : 'instagram',
        lists : [
            '100 Instagram likes',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=100+Instagram+Likes&amount=2&lc=US&on0=Instagram+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '5.00', type : 'instagram',
        lists : [
            '300 Instagram likes',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=500+Instagram+Likes&amount=5&lc=US&on0=Instagram+Url%3A&on1=Instagram+Url%3A&on2=Instagram+Url%3A&on3=Instagram+Url%3A&on4=Instagram+Url%3A&os0=&os1=&os2=&os3=&os4=&submit=Buy+Now'
    },
    {
        title : 'package 3',price : '9.00', type : 'instagram',
        lists : [
            '500 Instagram likes',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=1000+Instagram+Likes&amount=9&lc=US&on0=Instagram+Url%3A&on1=Instagram+Url%3A&on2=Instagram+Url%3A&on3=Instagram+Url%3A&on4=Instagram+Url%3A&on5=Instagram+Url%3A&on6=Instagram+Url%3A&on7=Instagram+Url%3A&on8=Instagram+Url%3A&on9=Instagram+Url%3A&os1=&os2=&os3=&os4=&os5=&os6=&os7=&os8=&submit=Buy+Now&os9=&os0='
    },
    {
        title : 'package 4',price : '18.00', type : 'instagram',
        lists : [
            '1000 Instagram likes',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=2000+Instagram+Likes&amount=18&lc=US&on0=Instagram+Url%3A&on1=Instagram+Url%3A&on2=Instagram+Url%3A&on3=Instagram+Url%3A&on4=Instagram+Url%3A&on5=Instagram+Url%3A&on6=Instagram+Url%3A&on7=Instagram+Url%3A&on8=Instagram+Url%3A&on9=Instagram+Url%3A&os1=&os2=&os3=&os4=&os5=&os6=&os7=&os8=&submit=Buy+Now&os9=&os0='
    },
    {
        title : 'package 5',price : '35.00', type : 'instagram',
        lists : [
            '2000 Instagram likes',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=5000+Instagram+Likes&amount=35&lc=US&on0=Instagram+Url%3A&on1=Instagram+Url%3A&on2=Instagram+Url%3A&on3=Instagram+Url%3A&on4=Instagram+Url%3A&on5=Instagram+Url%3A&on6=Instagram+Url%3A&on7=Instagram+Url%3A&on8=Instagram+Url%3A&on9=Instagram+Url%3A&os1=&os2=&os3=&os4=&os5=&os6=&os7=&os8=&submit=Buy+Now&os9=&os0='
    },
]

let data1 = [
    {
        title : 'package 1',price : '60.00', type : 'instagram',
        lists : [
            '10000 Instagram likes',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=10000+Instagram+Likes&amount=60&lc=US&on0=Instagram+Url%3A&on1=Instagram+Url%3A&on2=Instagram+Url%3A&on3=Instagram+Url%3A&on4=Instagram+Url%3A&on5=Instagram+Url%3A&on6=Instagram+Url%3A&on7=Instagram+Url%3A&on8=Instagram+Url%3A&on9=Instagram+Url%3A&os1=&os2=&os3=&os4=&os5=&os6=&os7=&os8=&submit=Buy+Now&os9=&os0='
    },
    {
        title : 'package 2',price : '140.00', type : 'instagram',
        lists : [
            '25000 Instagram likes',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=25000+Instagram+Likes&amount=140&lc=US&on0=Instagram+Url%3A&on1=Instagram+Url%3A&on2=Instagram+Url%3A&on3=Instagram+Url%3A&on4=Instagram+Url%3A&on5=Instagram+Url%3A&on6=Instagram+Url%3A&on7=Instagram+Url%3A&on8=Instagram+Url%3A&on9=Instagram+Url%3A&os1=&os2=&os3=&os4=&os5=&os6=&os7=&os8=&submit=Buy+Now&os9=&os0='
    },
    {
        title : 'package 3',price : '250.00', type : 'instagram',
        lists : [
            '50000 Instagram likes',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=50000+Instagram+Likes&amount=250&lc=US&on0=Instagram+Url%3A&on1=Instagram+Url%3A&on2=Instagram+Url%3A&on3=Instagram+Url%3A&on4=Instagram+Url%3A&on5=Instagram+Url%3A&on6=Instagram+Url%3A&on7=Instagram+Url%3A&on8=Instagram+Url%3A&on9=Instagram+Url%3A&os1=&os2=&os3=&os4=&os5=&os6=&os7=&os8=&submit=Buy+Now&os9=&os0='
    },
]



class InstagramLikes extends React.Component{
    render(){
        return(
            <div className="shopify-followers pd44">
                <div className="container">
                    
                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2"><span className="my-red">instagram</span> likes</h2>
                        </div>
                    </div>

                    <div className="row">
                        <Pricing data={data}/>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2">more <span className="my-red">instagram</span> likes</h2>
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

export default InstagramLikes;