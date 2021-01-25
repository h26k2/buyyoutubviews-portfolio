import React from 'react'
import Heroyt from '../Components/Heroyt'
import Pricing from '../Components/Pricing'

let data = [
    {
        title : 'package 1',price : '20.00', type : 'youtube',
        lists : [
            '1000 youtube views',
            '50 likes',
            '10 comments'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=1000+Views+50+Likes+10+comments&amount=20&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '35.00', type : 'youtube',
        lists : [
            '3000 youtube views',
            '100 likes',
            '10 comments'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=3000+Views+100+Likes+10+comments&amount=35&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '65.00', type : 'youtube',
        lists : [
            '5000 youtube views',
            '100 likes',
            '25 comments'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=5000+views+100+likes+25+comments&amount=65&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 4',price : '110.00', type : 'youtube',
        lists : [
            '10000 youtube views',
            '200 likes',
            '25 comments'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=10000+Views+200+Likes+25+comments&amount=110&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 5',price : '250.00', type : 'youtube',
        lists : [
            '25000 youtube views',
            '500 likes',
            '25 comments'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=25000+Views+500+Likes+25+Comments&amount=250&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
]



let data1 = [
    {
        title : 'package 1',price : '500.00', type : 'youtube',
        lists : [
            '50000 youtube views',
            '1000 likes',
            '50 comments'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=50000+Views+1000+Likes+50+Comments&amount=500&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '750.00', type : 'youtube',
        lists : [
            '100 youtube views',
            '1000 likes',
            '100 comments'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=100000+Views+1000+Likes+100+Comments&amount=750&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '1700.00', type : 'youtube',
        lists : [
            '250000 youtube views',
            '1000 likes',
            '100 comments'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=250000+Views+1000+Likes+100+Comments&amount=1700&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 4',price : '2900.00', type : 'youtube',
        lists : [
            '500000 youtube views',
            '2000 likes',
            '200 comments'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=500000+Views+2000+Likes+200+Comments&amount=2900&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 5',price : '4900.00', type : 'youtube',
        lists : [
            '1 Million youtube views',
            '3000 likes',
            '300 comments'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=1+Million+Views+3000+Likes+300+comments&amount=4900&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
]




class YoutubeViewsLikesComments extends React.Component{


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
            <div className="youtube pd44">
                 <Heroyt/>
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2">youtube<span className="my-red"> views likes</span> and comments</h2>
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
                            <h2 className="my-heading dh2">more youtube <span className="my-red"> views likes</span> and comments packs</h2>
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

export default YoutubeViewsLikesComments;