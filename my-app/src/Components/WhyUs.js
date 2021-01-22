import React from 'react'

class WhyUs extends React.Component{
    render(){
        return(
            <div className="whyus container">
                <div className="row">
                    <div className="col-12">
                        <h3>best service</h3>
                        <h2>why choose us</h2>
                    </div>
                </div>
                <div className="row">

                    <div className="col-4">
                        <div className="card-v3">
                            <i className="fas fa-clipboard-check fa-4x"></i>
                            <h4>guarenteed money back policy</h4>
                            <p>In case of an inadequate result with the
                                views, 100% money back is guaranteed.
                                There will be no queries further.
                            </p>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card-v3">
                            <i className="fas fa-stopwatch fa-4x"></i>
                            <h4>quick and worthy views</h4>
                            <p>Increase in the number of views can be
                                seen within 24 hours to 48 hours. Customer
                                satisfaction is our ultimate goal
                            </p>
                        </div>
                    </div>


                    <div className="col-4">
                        <div className="card-v3">
                            <i className="fas fa-headphones-alt fa-4x"></i>
                            <h4>excellent customer support</h4>
                            <p>Help is offered anytime you require. Therefore, confusion can be
                                relegated from the mind immediately.
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default WhyUs;