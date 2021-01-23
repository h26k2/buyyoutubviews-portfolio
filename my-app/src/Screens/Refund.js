import React from 'react'


class Refund extends React.Component{
    render(){
        return(
            <div className="refund">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">your satisfication is our priorty</h4>
                            <h2 className="my-heading dh2">refund and <span className="my-red">cancellation</span> policy</h2>
                            <p>After order is started refund is not allowed. Our focus is complete customer satisfaction. In the event, if you are displeased with the services provided, we will refund back the money, provided the reasons are genuine and proved after investigation. Please read the fine prints of each deal before buying it, it provides all the details about the services or the product you purchase. After order is started refund is not allowed.</p>
                            <p>In case of dissatisfaction from our services, clients have the liberty to cancel their projects and request a refund from us. Our Policy for the cancellation and refund will be as follows</p>
                        </div>
                    </div>
                    <div className="row pd-btm">

                        <div className="col-12 col-md-6 ">
                            <div className="card-1" style={{background : "linear-gradient(110deg,#d13d32,#ff3728)"}}>
                                <i className="fas fa-hand-holding-usd fa-4x"></i>
                                <h5>Cancellation Policy</h5>
                                <p>For Cancellations please contact the us via contact us on <a href="mailto:support@buyyoutubviews.com" style={{textDecoration : 'underline'}}>support@buyyoutubviews.com</a>.</p>
                                <p>Requests received later than 3 business days prior to the end of the current service period will be treated as cancellation of services for the next service period.</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 ">
                            <div className="card-1" style={{background : "linear-gradient(120deg,#4079c7,#2c5a98)"}}>
                                <i className="far fa-window-close fa-4x"></i>
                                <h5>Refund Policy</h5>
                                <p>After order is started refund is not allowed.After order is started refund is not allowed.After order is started refund is not allowed.</p>
                                <p>If paid by credit card, refunds will be issued to the original credit card provided at the time of purchase and in case of payment gateway name payments refund will be made to the same account.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Refund;