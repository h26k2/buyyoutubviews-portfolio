import React from 'react'
import Pricing from '../Components/Pricing'

let data = [
    {
        title : 'package 1',price : '25.00', type : 'facebook',
        lists : [
            '1000  Followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=1000+Facebook+Followers&amount=25&lc=US&on0=Facebook+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '50.00', type : 'facebook',
        lists : [
            '2000   Followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=2000+Facebook+Followers&amount=50&lc=US&on0=Facebook+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '125.00', type : 'facebook',
        lists : [
            '5000   Followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=5000+Facebook+Followers&amount=125&lc=US&on0=Facebook+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 4',price : '250.00', type : 'facebook',
        lists : [
            '10000   Followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=10000+Facebook+Followers&amount=250&lc=US&on0=Facebook+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 5',price : '500.00', type : 'facebook',
        lists : [
            '20000   Followers',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=20000+Facebook+Followers&amount=500&lc=US&on0=Facebook+Url%3A&submit=Buy+Now&os0='
    },
]





class FacebookFollowers extends React.Component{
    render(){
        return(
            <div className=" facebook pd44">
                <div className="container">
                    
                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2"><span className="my-red">facebook</span> followers</h2>
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

export default FacebookFollowers;