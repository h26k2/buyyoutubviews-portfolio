import React from 'react'
import Heroyt from '../Components/Heroyt'
import Pricing from '../Components/Pricing'

let data = [
    {
        title : 'package 1',price : '30.00', type : 'youtube',
        lists : [
            '1000 youtube views',
            '50 likes',
            '100 Subscribers'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=1000+Views+50+Likes+100+subscribers&amount=30&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '40.00', type : 'youtube',
        lists : [
            '3000 youtube views',
            '100 likes',
            '100 Subscribers'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=3000+Views+100+Likes+100+Subscribers&amount=40&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '50.00', type : 'youtube',
        lists : [
            '5000 youtube views',
            '100 likes',
            '100 Subscribers'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=5000+views+100+likes+100+Subscribers&amount=50&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 4',price : '110.00', type : 'youtube',
        lists : [
            '10000 youtube views',
            '200 likes',
            '200 Subscribers'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=10000+Views+200+Likes+200+Subscribers&amount=110&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 5',price : '230.00', type : 'youtube',
        lists : [
            '25000 youtube views',
            '500 likes',
            '250 Subscribers'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=25000+Views+500+Likes+250+Subscribers&amount=230&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
]



let data1 = [
    {
        title : 'package 1',price : '400.00', type : 'youtube',
        lists : [
            '50000 youtube views',
            'real views',
            '1000 likes',
            '500 subscribers'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=50000+Views+1000+Likes+500+Subscribers&amount=400&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '700.00', type : 'youtube',
        lists : [
            '100000 youtube views',
            'real views',
            '1000 likes',
            '1000 subscribers'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=100000+Views+1000+Likes+1000+Subscribers&amount=700&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '1600.00', type : 'youtube',
        lists : [
            '250000 youtube views',
            'real views',
            '1000 likes',
            '1000 subscribers'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=250000+Views+1000+Likes+1000+Subscribers&amount=1600&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 4',price : '3000.00', type : 'youtube',
        lists : [
            '500000 youtube views',
            'real views',
            '2000 likes',
            '2000 subscribers'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=500000+Views+2000+Likes+2000+Subscribers&amount=3000&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 5',price : '4900.00', type : 'youtube',
        lists : [
            '1 Million youtube views',
            'real views',
            '3000 likes',
            '3000 subscribers'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=1+Million+Views+3000+Likes+3000+Subscribers&amount=4900&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
]




class YoutubeViewsLikesSubscribers extends React.Component{
    render(){
        return(
            <div className=" pd44 youtube">
                 <Heroyt/>
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2">youtube<span className="my-red"> views likes</span> and subscribers</h2>
                        </div>
                    </div>

                    <div className="row">
                        <Pricing data={data}/>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2">more youtube <span className="my-red"> views likes</span> and subscribers packs</h2>
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

export default YoutubeViewsLikesSubscribers;