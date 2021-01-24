import React from 'react'
import Heroyt from '../Components/Heroyt'
import Pricing from '../Components/Pricing'

let data = [
    {
        title : 'package 1',price : '3.00', type : 'youtube',
        lists : [
            '10 real youtube comments',
            'real comments from real people'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=10+Youtube+Comments&amount=3&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '8.00', type : 'youtube',
        lists : [
            '25 real youtube comments',
            'real comments from real people'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=25+Youtube+Comments&amount=8&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '15.00', type : 'youtube',
        lists : [
            '50 real youtube comments',
            'real comments from real people'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=50+Youtube+Comments&amount=15&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 4',price : '30.00', type : 'youtube',
        lists : [
            '100 real youtube comments',
            'real comments from real people'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=100+Youtube+Comments&amount=30&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 5',price : '150.00', type : 'youtube',
        lists : [
            '500 real youtube comments',
            'real comments from real people'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=500+Youtube+Comments&amount=150&lc=US&on0=Youtube+Url%3A&submit=Buy+Now&os0='
    },
]





class YoutubeComments extends React.Component{
    render(){
        return(
            <div className="pd44 youtube">
                 <Heroyt/>
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2"><span className="my-red">youtube</span> comments</h2>
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

export default YoutubeComments;