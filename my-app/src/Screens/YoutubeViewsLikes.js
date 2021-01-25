import React from 'react'
import Heroyt from '../Components/Heroyt'
import Pricing from '../Components/Pricing'

let data = [
    {
        title : 'package 1',price : '8.00', type : 'youtube',
        lists : [
            '1000 youtube views',
            '50 Likes',
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=1000+Views+50+Likes&amount=8&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '23.00', type : 'youtube',
        lists : [
            '3000 youtube views',
            '100 Likes',
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=3000+Views+100+Likes&amount=23&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '35.00', type : 'youtube',
        lists : [
            '5000 youtube views',
            '100 Likes',
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=5000+views+100+likes&amount=35&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 4',price : '60.00', type : 'youtube',
        lists : [
            '10000 youtube views',
            '200 Likes',
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=10000+Views+200+Likes&amount=60&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 5',price : '125.00', type : 'youtube',
        lists : [
            '25000 youtube views',
            '250 Likes & 25 Comments',
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=25000+Views+250+Likes+25+Comments&amount=125&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
]



let data1 = [
    {
        title : 'package 1',price : '220.00', type : 'youtube',
        lists : [
            '50000 youtube views',
            '1000 Likes',
            'Real Views',
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=50000+Views+1000+Likes&amount=220&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '350.00', type : 'youtube',
        lists : [
            '100000 youtube views',
            '1000 Likes',
            'Real Views',
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=100000+Views+1000+Likes&amount=350&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '800.00', type : 'youtube',
        lists : [
            '250000 youtube views',
            '1000 Likes',
            'Real Views',
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=250000+Views+1000+Likes&amount=800&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 4',price : '1300.00', type : 'youtube',
        lists : [
            '500000 youtube views',
            '2000 Likes',
            'Real Views',
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=500000+Views+2000+Likes&amount=1300&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 5',price : '2050.00', type : 'youtube',
        lists : [
            '1 Million youtube views',
            '2000 Likes',
            'Real Views'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=1+Million+Views+2000+Likes&amount=2050&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
]




class YoutubeViewsLikes extends React.Component{


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
            <div className="pd44 youtube">
                <Heroyt/>
                
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2"><span className="my-red">youtube views</span> and likes</h2>
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
                            <h2 className="my-heading dh2">more <span className="my-red">youtube views</span> and likes</h2>
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

export default YoutubeViewsLikes;