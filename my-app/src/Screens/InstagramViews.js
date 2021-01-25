import React from 'react'
import Pricing from '../Components/Pricing'

let data = [
    {
        title : 'package 1',price : '2.00', type : 'instagram',
        lists : [
            '1000 Instagram Views',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=1000+Instagram+Views&amount=2&lc=US&on0=Instagram+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '4.00', type : 'instagram',
        lists : [
            '5000 Instagram Views',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=5000+Instagram+Views&amount=4&lc=US&on0=Instagram+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '7.00', type : 'instagram',
        lists : [
            '10000 Instagram Views',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=10000+Instagram+Views&amount=7&lc=US&on0=Instagram+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 4',price : '12.00', type : 'instagram',
        lists : [
            '20000 Instagram Views',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=20000+Instagram+Views&amount=12&lc=US&on0=Instagram+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 5',price : '25.00', type : 'instagram',
        lists : [
            '50000 Instagram Views',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=50000+Instagram+Views&amount=25&lc=US&on0=Instagram+Url%3A&submit=Buy+Now&os0='
    },
]

let data1 = [
    {
        title : 'package 1',price : '45.00', type : 'instagram',
        lists : [
            '100000 Instagram Views',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=100000+Instagram+Views&amount=45&lc=US&on0=Instagram+Url%3A&submit=Buy+Now&os0='
    },
]



class InstagramViews extends React.Component{

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
            <div className="instagram pd44">
                <div className="container">
                    
                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2"><span className="my-red">instagram</span> Views</h2>
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
                            <h2 className="my-heading dh2">more <span className="my-red">instagram</span> Views</h2>
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

export default InstagramViews;