import React from 'react'
import Heroyt from '../Components/Heroyt'
import Intro from '../Components/Intro'
import WhyUs from '../Components/WhyUs'
import Testimonial from '../Components/Testimonial'
import Pricing from '../Components/Pricing'


let data = [
    {
        title : 'youtube package 1',price : '5.00', type : 'youtube',
        lists : [
            '500 youtube views',
            'delivery time 1 day',
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=500+Views&amount=3&lc=US&on0=YouTube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'facebook package 2',price : '12.00', type : 'facebook',
        lists : [
            '500 likes',
            'Delivery Time After Order Starts'
        ],
        url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=500+Facebook+Likes&amount=20&lc=US&on0=Facebook+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'twitter package 3',price : '20.00', type : 'twitter',
        lists : [
            '100 followers',
            'Delivery Time After Order Starts'
        ],
        url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=100+Twitter+Followers&amount=10&lc=US&on0=Twitter+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'instagram package 4',price : '2.00', type : 'instagram',
        lists : [
            '100 Instagram followers',
            'Delivery Time After Order Starts'
        ],
        url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=100+Instagram+Followers&amount=2&lc=US&on0=Instagram+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'soundcloud package 5',price : '2.00', type : 'soundcloud',
        lists : [
            '100 followers',
            'Delivery Time After Order Starts'
        ],
        url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=100+Soundcloud+Followers&amount=2&lc=US&on0=Soundcloud+Url%3A&submit=Buy+Now&os0='
    },
]




class Home extends React.Component{

    componentDidMount(){
        
        document.body.removeChild(document.getElementById('h26k2'));
        let js = document.createElement('script');
        js.setAttribute('id','h26k2');
        js.innerHTML = `$(".owl-carousel").owlCarousel({margin:40,nav:true,responsiveClass : true , responsive:{
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
            <div className="app home">
                <Intro/>
                <Heroyt/>
                <Pricing data={data} />
                <WhyUs/>
                <Testimonial />
            </div>
        )
    }
}

export default Home;