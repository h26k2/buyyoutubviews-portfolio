import React from 'react'

class Pricing extends React.Component{
    render(){
        return(
            <div className="pricing">
                <div className="container">
                    <div className="row">

                        <div className="col-4">
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
                                <input type="url" />
                                <button>buy</button>
                            </div>
                        </div>

                        <div className="col-4">
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
                                <input type="url" />
                                <button>buy</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default Pricing; 