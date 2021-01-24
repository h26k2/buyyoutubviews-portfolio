import React from 'react'
import Pricing from '../Components/Pricing'

let data = [
    {
        title : 'package 1',price : '2.00', type : 'twitter',
        lists : [
            '1000 Views',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=1000+Twitter+Views&amount=2&lc=US&on0=Twitter+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '10.00', type : 'twitter',
        lists : [
            '5000  Views',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=5000+Twitter+Views&amount=10&lc=US&on0=Twitter+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '20.00', type : 'twitter',
        lists : [
            '10000  Views',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=10000+Twitter+Views&amount=20&lc=US&on0=Twitter+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 4',price : '40.00', type : 'twitter',
        lists : [
            '20000   Views',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=20000+Twitter+Views&amount=40&lc=US&on0=Twitter+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 5',price : '90.00', type : 'twitter',
        lists : [
            '50000  Views',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=50000+Twitter+Views&amount=90&lc=US&on0=Twitter+Url%3A&submit=Buy+Now&os0='
    },
]

let data1 = [
    {
        title : 'package 1',price : '160.00', type : 'twitter',
        lists : [
            '100K Twitter Views',
            'Delivery Time After Order Starts'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=100K+Twitter+Views&amount=160&lc=US&on0=Twitter+Url%3A&submit=Buy+Now&os0='
    },
]



class TwitterViews extends React.Component{
    render(){
        return(
            <div className="twitter pd44">
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2"><span className="my-red">twitter</span> views</h2>
                        </div>
                    </div>

                    <div className="row">
                        <Pricing data={data}/>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2">more <span className="my-red">twitter</span> views</h2>
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

export default TwitterViews;