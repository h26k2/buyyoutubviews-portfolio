import React from 'react'
import Heroyt from '../Components/Heroyt'
import Pricing from '../Components/Pricing'

let data = [
    {
        title : 'package 1',price : '15.00', type : 'youtube',
        lists : [
            '100 youtube subscribers',
            'Buy Youtube Subscribers'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=100+Youtube+Subscribers&amount=15&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '30.00', type : 'youtube',
        lists : [
            '250 youtube subscribers',
            'Buy Youtube Subscribers'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=250+Youtube+Subscribers&amount=30&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '60.00', type : 'youtube',
        lists : [
            '500 youtube subscribers',
            'Buy Youtube Subscribers'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=500+Youtube+Subscribers&amount=60&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 4',price : '120.00', type : 'youtube',
        lists : [
            '1000 youtube subscribers',
            'Buy Youtube Subscribers'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=1000+Youtube+Subscribers&amount=120&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 5',price : '500.00', type : 'youtube',
        lists : [
            '5000 youtube subscribers',
            'Buy Youtube Subscribers'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=5000+Youtube+Subscribers&amount=500&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
]



let data1 = [
    {
        title : 'package 1',price : '850.00', type : 'youtube',
        lists : [
            '10000 youtube subscribers',
            'Buy Youtube Subscribers'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=10000+Youtube+Subscribers&amount=850&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
]




class YoutubeSubscribers extends React.Component{

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
                 <Heroyt/>
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2"><span className="my-red">youtube</span> subscribers</h2>
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
                            <h2 className="my-heading dh2">more <span className="my-red">youtube</span> subscribers packs</h2>
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

export default YoutubeSubscribers;