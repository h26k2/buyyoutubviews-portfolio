import React from 'react'
import {Link} from 'react-router-dom'
/*
let data = [
    {
    title : 'package 1',price : '400.00', type : 'yotube'
    lists : [
        '100,000 views',
        'real ads non drop views',
        'delivery time 1 day'
    ],
        url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=5000+Spotify+Followers&amount=35&lc=US&on0=Spotify+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 2',price : '400.00',type : 'yotube',
        lists : [
            '100,000 views',
            'real ads non drop views',
            'delivery time 1 day'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=5000+Spotify+Followers&amount=35&lc=US&on0=Spotify+Url%3A&submit=Buy+Now&os0='
    },
    {
        title : 'package 3',price : '400.00',type : 'yotube',
        lists : [
            '100,000 views',
            'real ads non drop views',
            'delivery time 1 day'
        ],
            url : 'https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=5000+Spotify+Followers&amount=35&lc=US&on0=Spotify+Url%3A&submit=Buy+Now&os0='
    }
]

*/
class Pricing extends React.Component{


    handleChange(e){
        let newOne = e.target.value;
        let existing = e.target.parentNode.getElementsByTagName("a")[0].href;
        existing = existing.substr(0,existing.indexOf("&os0"));
        existing += `&os0=${newOne}`;
        e.target.parentNode.getElementsByTagName("a")[0].href = existing;
    }
   
    render(){

        let {data}  = this.props;

        let outer_iteration , inner_iteration = 0;

        let toRender = [];

        for(let i=0 ; i<data.length ; i++){

            let {title , price , lists , url , type} = data[i];
            
            let li = [];
            for(let j=0 ; j<lists.length ; j++){
                li.push(<li key={`${inner_iteration}__${j}`}>{lists[j]}</li>);
            }

            toRender.push(
                <div className="item" key={`${outer_iteration}__${i}`}>
                    <div className="pricing-card">
                        <h5>{title}</h5>
                        <h4><span className="usd">$</span>{price}</h4>
                        <ul>
                            {li}
                        </ul>
                        <p>{type} <span>url</span></p>
                        <input type="url" onChange={this.handleChange} />
                        <a href={url}>BUY</a>
                    </div>
                </div>
            )

            outer_iteration += 1;
            inner_iteration += 1;

        }
        

        return(
            <div className="pricing">
                <div className="container">
                    <div className="row">
                        <div className="owl-carousel owl-theme">
                            {toRender}
                        </div>
                        {/*<div className="col-4">
                            <div className="pricing-card">
                                <h5>package 1</h5>
                                <h4><span className="usd">$</span>400.00</h4>
                                <ul>
                                    <li>
                                        100,000 VIEWS
                                    </li>
                                    <li>real ads non drop views</li>
                                    <li>delivery time 1 day</li>
                                </ul>
                                <p>youtube <span>url</span></p>
                                <input type="url" onChange={this.handleChange} />
                                <Link to="https://panel.buyyoutubviews.com/signup?cmd=_xclick&business=&currency_code=USD&item_name=5000+Spotify+Followers&amount=35&lc=US&on0=Spotify+Url%3A&submit=Buy+Now&os0=">buy</Link>
                            </div>
        </div>*/}

                        


                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p style={{textAlign : 'center',marginTop:'1em'}}><i>* Order will start within 24-48 hours of payment. Please read <Link to="/faq" style={{textDecoration:'underline'}}>FAQ</Link> and <Link to="/refunds" style={{textDecoration:'underline'}}>Refund Policy</Link> before you order.</i></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    
}

export default Pricing; 