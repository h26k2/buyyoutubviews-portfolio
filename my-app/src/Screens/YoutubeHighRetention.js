import React from 'react'
import Heroyt from '../Components/Heroyt'
import Pricing from '../Components/Pricing'

let data = [
    {
        title : 'package 1',price : '5.00', type : 'youtube',
        lists : [
            '1000 youtube high retention views',
            'Delivery Time after order starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=1000+High+Retention+Views&amount=5&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '25.00', type : 'youtube',
        lists : [
            '5000 youtube high retention views',
            'Delivery Time after order starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=5000+High+Retention+Views&amount=25&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '50.00', type : 'youtube',
        lists : [
            '10000 youtube high retention views',
            'Delivery Time after order starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=10000+High+Retention+Views&amount=50&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 4',price : '90.00', type : 'youtube',
        lists : [
            '20000 youtube high retention views',
            'Delivery Time after order starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=20000+High+Retention+Views&amount=90&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 5',price : '200.00', type : 'youtube',
        lists : [
            '50000 youtube high retention views',
            'Delivery Time after order starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=50000+High+Retention+Views&amount=200&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
]



let data1 = [
    {
        title : 'package 1',price : '400.00', type : 'youtube',
        lists : [
            '100000 youtube High retention views',
            'Delivery Time after order starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=100000+High+Retention+Views&amount=400&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '1600.00', type : 'youtube',
        lists : [
            '500000 youtube High retention views',
            'Delivery Time after order starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=500000+High+Retention+Views&amount=1600&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '2500.00', type : 'youtube',
        lists : [
            '1 Million youtube High retention views',
            'Delivery Time after order starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=1+Million+High+Retention+Views&amount=2500&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
]




class YoutubeHighRetention extends React.Component{
    render(){
        return(
            <div className=" pd44 youtube">
                 <Heroyt/>
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2">youtube <span className="my-red">high retention </span> views</h2>
                        </div>
                    </div>

                    <div className="row">
                        <Pricing data={data}/>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2">more youtube <span className="my-red">high retention </span> views</h2>
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

export default YoutubeHighRetention;