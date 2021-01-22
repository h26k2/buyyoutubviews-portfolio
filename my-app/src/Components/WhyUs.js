import React from 'react'

class WhyUs extends React.Component{
    render(){
        return(
            <div className="whyus container">
                <div className="row">
                    <div className="col-12">
                        <h4>best service</h4>
                        <h2 className="my-heading">why <span>choose</span> us</h2>
                    </div>
                </div>
                <div className="row row-eq-height">

                    <div className="col-12 col-md-6 col-lg-4 ">
                        <div className="card-1" style={{background : "linear-gradient(120deg,#00efbf,#00e0b2)"}}>
                            <i className="fas fa-clipboard-check fa-4x"></i>
                            <h5>guarenteed money back policy</h5>
                            <p>In case of an inadequate result with the
                                views, 100% money back is guaranteed.
                                There will be no queries further.
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card-1" style={{background : "linear-gradient(120deg,#00e7a3,#00d898)"}}>
                            <i className="fas fa-stopwatch fa-4x"></i>
                            <h5>quick and worthy views</h5>
                            <p>Increase in the number of views can be
                                seen within 24 hours to 48 hours. Customer
                                satisfaction is our ultimate goal
                            </p>
                        </div>
                    </div>


                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card-1" style={{background : "linear-gradient(120deg,#00c78e,#00ba84)"}}>
                            <i className="fas fa-headphones-alt fa-4x"></i>
                            <h5>excellent customer support</h5>
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