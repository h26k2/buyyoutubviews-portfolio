import React from 'react'
import Pricing from '../Components/Pricing'

let data = [
    {
        title : 'package 1',price : '3.00', type : 'instagram',
        lists : [
            '10 Instagram Comments',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=10+Instagram+Comments&amount=3&lc=US&on0=Instagram+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '8.00', type : 'instagram',
        lists : [
            '25 Instagram Comments',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=25+Instagram+Comments&amount=8&lc=US&on0=Instagram+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '15.00', type : 'instagram',
        lists : [
            '50 Instagram Comments',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=50+Instagram+Comments&amount=15&lc=US&on0=Instagram+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 4',price : '30.00', type : 'instagram',
        lists : [
            '100 Instagram Comments',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=100+Instagram+Comments&amount=30&lc=US&on0=Instagram+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 5',price : '150.00', type : 'instagram',
        lists : [
            '500 Instagram Comments',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=500+Instagram+Comments&amount=150&lc=US&on0=Instagram+Url%3A&submit=Buy+Now&os0='
    },
]


class InstagramComments extends React.Component{

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
                            <h2 className="my-heading dh2"><span className="my-red">instagram</span> Comments</h2>
                        </div>
                    </div>

                    <div className="row">
                        <Pricing data={data}/>
                    </div>

                </div>
            </div>
        )
    }
}

export default InstagramComments;