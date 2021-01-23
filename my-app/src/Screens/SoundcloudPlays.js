import React from 'react'
import Pricing from '../Components/Pricing'

let data = [
    {
        title : 'package 1',price : '3.00', type : 'soundcloud',
        lists : [
            '5000 Plays',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=1000+Spotify+Followers&amount=8&lc=US&on0=Spotify+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '6.00', type : 'soundcloud',
        lists : [
            '10000   Plays',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=10000+Soundcloud+Plays&amount=6&lc=US&on0=Soundcloud+Url%3A&on1=Soundcloud+Url%3A&on2=Soundcloud+Url%3A&on3=Soundcloud+Url%3A&on4=Soundcloud+Url%3A&on5=Soundcloud+Url%3A&on6=Soundcloud+Url%3A&on7=Soundcloud+Url%3A&on8=Soundcloud+Url%3A&on9=Soundcloud+Url%3A&os0=&os1=&os2=&os3=&os4=&os5=&os6=&os7=&os8=&os9=&submit=Buy+Now'
    },
    {
        title : 'package 3',price : '12.00', type : 'soundcloud',
        lists : [
            '20000  Plays',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=20000+Soundcloud+Plays&amount=12&lc=US&on0=Soundcloud+Url%3A&on1=Soundcloud+Url%3A&on2=Soundcloud+Url%3A&on3=Soundcloud+Url%3A&on4=Soundcloud+Url%3A&on5=Soundcloud+Url%3A&on6=Soundcloud+Url%3A&on7=Soundcloud+Url%3A&on8=Soundcloud+Url%3A&on9=Soundcloud+Url%3A&os0=&os1=&os2=&os3=&os4=&os5=&os6=&os7=&os8=&os9=&submit=Buy+Now'
    },
    {
        title : 'package 4',price : '22.00', type : 'soundcloud',
        lists : [
            '50000  Plays',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=50000+Soundcloud+Plays&amount=22&lc=US&on0=Soundcloud+Url%3A&on1=Soundcloud+Url%3A&on2=Soundcloud+Url%3A&on3=Soundcloud+Url%3A&on4=Soundcloud+Url%3A&on5=Soundcloud+Url%3A&on6=Soundcloud+Url%3A&on7=Soundcloud+Url%3A&on8=Soundcloud+Url%3A&on9=Soundcloud+Url%3A&os0=&os1=&os2=&os3=&os4=&os5=&os6=&os7=&os8=&os9=&submit=Buy+Now'
    },
    {
        title : 'package 5',price : '42.00', type : 'soundcloud',
        lists : [
            '100000 Plays',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=100000+Soundcloud+Plays&amount=42&lc=US&on0=Soundcloud+Url%3A&on1=Soundcloud+Url%3A&on2=Soundcloud+Url%3A&on3=Soundcloud+Url%3A&on4=Soundcloud+Url%3A&on5=Soundcloud+Url%3A&on6=Soundcloud+Url%3A&on7=Soundcloud+Url%3A&on8=Soundcloud+Url%3A&on9=Soundcloud+Url%3A&os0=&os1=&os2=&os3=&os4=&os5=&os6=&os7=&os8=&os9=&submit=Buy+Now'
    },
]

let data1 = [
    {
        title : 'package 1',price : '80.00', type : 'soundcloud',
        lists : [
            '250,000 Plays',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=250000+Soundcloud+Plays&amount=80&lc=US&on0=Soundcloud+Url%3A&on1=Soundcloud+Url%3A&on2=Soundcloud+Url%3A&on3=Soundcloud+Url%3A&on4=Soundcloud+Url%3A&on5=Soundcloud+Url%3A&on6=Soundcloud+Url%3A&on7=Soundcloud+Url%3A&on8=Soundcloud+Url%3A&on9=Soundcloud+Url%3A&os0=&os1=&os2=&os3=&os4=&os5=&os6=&os7=&os8=&os9=&submit=Buy+Now'
    },
    {
        title : 'package 2',price : '140.00', type : 'soundcloud',
        lists : [
            '500,000 Plays',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=500000+Soundcloud+Plays&amount=140&lc=US&on0=Soundcloud+Url%3A&on1=Soundcloud+Url%3A&on2=Soundcloud+Url%3A&on3=Soundcloud+Url%3A&on4=Soundcloud+Url%3A&on5=Soundcloud+Url%3A&on6=Soundcloud+Url%3A&on7=Soundcloud+Url%3A&on8=Soundcloud+Url%3A&on9=Soundcloud+Url%3A&os0=&os1=&os2=&os3=&os4=&os5=&os6=&os7=&os8=&os9=&submit=Buy+Now'
    },
    {
        title : 'package 3',price : '230.00', type : 'soundcloud',
        lists : [
            '1 Million Plays',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=1+Million+Soundcloud+Plays&amount=230&lc=US&on0=Soundcloud+Url%3A&on1=Soundcloud+Url%3A&on2=Soundcloud+Url%3A&on3=Soundcloud+Url%3A&on4=Soundcloud+Url%3A&on5=Soundcloud+Url%3A&on6=Soundcloud+Url%3A&on7=Soundcloud+Url%3A&on8=Soundcloud+Url%3A&on9=Soundcloud+Url%3A&os0=&os1=&os2=&os3=&os4=&os5=&os6=&os7=&os8=&os9=&submit=Buy+Now'
    },
]



class SoundcloudPlays extends React.Component{
    render(){
        return(
            <div className="shopify-followers pd44">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2"><span className="my-red">soundcloud</span> plays</h2>
                        </div>
                    </div>

                    <div className="row">
                        <Pricing data={data}/>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2">more<span className="my-red">soundcloud</span> packs</h2>
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

export default SoundcloudPlays;