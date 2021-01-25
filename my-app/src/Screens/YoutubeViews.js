import React from 'react'
import Heroyt from '../Components/Heroyt'
import Pricing from '../Components/Pricing'

let data = [
    {
        title : 'package 1',price : '3.00', type : 'youtube',
        lists : [
            '500 youtube views',
            'Real NON DROP Views',
            'Delivery Time 1 Day'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=500+Views&amount=3&lc=US&on0=YouTube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '6.00', type : 'youtube',
        lists : [
            '1000  youtube views',
            'Real NON DROP Views',
            'Delivery Time 1 Day'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=1000+Views&amount=6&lc=US&on0=YouTube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '18.00', type : 'youtube',
        lists : [
            '3000 youtube views',
            'Real NON DROP Views',
            'Delivery Time 1 Day'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=3000+Views&amount=18&lc=US&on0=YouTube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 4',price : '30.00', type : 'youtube',
        lists : [
            '5000  youtube views',
            'Real NON DROP Views',
            'Delivery Time 1 Day'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=5000+Views&amount=30&lc=US&on0=YouTube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 5',price : '60.00', type : 'youtube',
        lists : [
            '10000 youtube views',
            'Real NON DROP Views',
            'Delivery Time 1 Day'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=10000+Views&amount=60&lc=US&on0=YouTube+Url%3A&submit=Buy+Now&os0='
    },
]



let data1 = [
    {
        title : 'package 1',price : '120.00', type : 'youtube',
        lists : [
            '20000 youtube views',
            'Real NON DROP Views',
            'Delivery Time 1-2 Day'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=20000+Views&amount=120&lc=US&on0=YouTube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '200.00', type : 'youtube',
        lists : [
            '50000 youtube views',
            'Real NON DROP Views',
            'Delivery Time 1-2 Day'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=50000+Views&amount=200&lc=US&on0=YouTube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '400.00', type : 'youtube',
        lists : [
            '100000 youtube views',
            'Real ADS NON DROP Views',
            'Delivery Time 1-2 Day'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=100000+Views&amount=400&lc=US&on0=YouTube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 4',price : '750.00', type : 'youtube',
        lists : [
            '250000 youtube views',
            'Real ADS NON DROP Views',
            'Delivery Time 1-2 Day'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=250000+Views&amount=750&lc=US&on0=YouTube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 5',price : '1500.00', type : 'youtube',
        lists : [
            '500000 youtube views',
            'Real ADS NON DROP Views',
            'Delivery Time 1-2 Day'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=500000+Views&amount=1500&lc=US&on0=YouTube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 6',price : '2800.00', type : 'youtube',
        lists : [
            '1 Million views',
            'Real ADS NON DROP Views',
            'Delivery Time 1-2 Day'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=500000+Views&amount=1500&lc=US&on0=YouTube+Url%3A&submit=Buy+Now&os0='
    },
]




class YoutubeViews extends React.Component{

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
            <div className=" pd44 youtube">
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2"><span className="my-red">youtube</span> views</h2>
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
                            <h2 className="my-heading dh2">more <span className="my-red">youtube</span> views</h2>
                        </div>
                    </div>

                    <div className="row">
                    <div className="col-12">
                        <Pricing data={data1}/>
                        </div>
                    </div>

                </div>
                <Heroyt/>
            </div>
        )
    }
}

export default YoutubeViews;