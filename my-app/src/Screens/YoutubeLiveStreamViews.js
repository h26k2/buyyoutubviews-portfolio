import React from 'react'
import Heroyt from '../Components/Heroyt'
import Pricing from '../Components/Pricing'

let data = [
    {
        title : 'package 1',price : '50.00', type : 'youtube',
        lists : [
            '1000 Youtube Live Stream Views',
            'Delivery Time after order starts'
        ],
           url : '#'
    },
    {
        title : 'package 2',price : '100.00', type : 'youtube',
        lists : [
            '10000 Youtube Live Stream Views',
            'Delivery Time after order starts'
        ],
            url : '#'
    },
    {
        title : 'package 3',price : '200.00', type : 'youtube',
        lists : [
            '20000 Youtube Live Stream Views',
            'Delivery Time after order starts'
        ],
            url : '#'
    },
    {
        title : 'package 4',price : '500.00', type : 'youtube',
        lists : [
            '50000 Youtube Live Stream Views',
            'Delivery Time after order starts'
        ],
            url : '#'
    },
    {
        title : 'package 5',price : '950.00', type : 'youtube',
        lists : [
            '100000 Youtube Live Stream Views',
            'Delivery Time after order starts'
        ],
            url : '#'
    },
]



let data1 = [
    {
        title : 'package 1',price : '4000.00', type : 'youtube',
        lists : [
            '500000 Youtube Live Stream Views',
            'Delivery Time after order starts'
        ],
            url : '#'
    },
    {
        title : 'package 2',price : '7500.00', type : 'youtube',
        lists : [
            '1 Million Youtube Live Stream Views',
            'Delivery Time after order starts'
        ],
            url : '#'
    },
   
]




class YoutubeLiveStreamViews extends React.Component{
    render(){
        return(
            <div className=" pd44 youtube">
                 <Heroyt/>
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2">youtube <span className="my-red">live stream </span> views</h2>
                        </div>
                    </div>

                    <div className="row">
                        <Pricing data={data}/>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">buy from us</h4>
                            <h2 className="my-heading dh2">more youtube <span className="my-red">live stream </span> views pack</h2>
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

export default YoutubeLiveStreamViews;