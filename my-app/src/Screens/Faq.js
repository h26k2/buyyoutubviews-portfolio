import React from 'react'

class Faq extends React.Component{
    render(){
        return(
            <div className="faq">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">browse FAQ answers</h4>
                            <h2 className="my-heading dh2">Frequently <span className="my-red">asked</span> questions</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div id="accordion">

                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#question1">IS IT POSSIBLE TO GET QUALITY VIEWS?</a>
                                    </div>
                                    <div id="question1" className="collapse show" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>100% quality and real views are guaranteed. We deliver views through various networks. Therefore, we are considered as the best social media marketing company.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#question2">WHAT CAN BE THE MINIMUM AMOUNT OF VIEWS PER VIDEO?</a>
                                    </div>
                                    <div id="question2" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>We offer minimum 500 views with each video.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#question3">HOW LONG DO YOU HAVE TO WAIT TO SEE INCREASE IN VIEWS?</a>
                                    </div>
                                    <div id="question3" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Once you place your order, we will start the order within 24 hours. Delivery time details are written under the packages. Each package have different delivery time.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#question4">FROM WHERE THE VIEWS COME?</a>
                                    </div>
                                    <div id="question4" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Through real traffic, views are generated. Therefore, views can come from different parts of world. Stress or tension must not be taken about the issue at all.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#question5">CAN YOU KNOW ABOUT THE VIEW COUNTRIES?</a>
                                    </div>
                                    <div id="question5" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Generally, views are offered from worldwide. However, it may be possible to get views from targeted countries also.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#question6">IS IT POSSIBLE TO ENSURE ADSENSE SAFETY ON VIEWS?</a>
                                    </div>
                                    <div id="question6" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Yes, AdSense safety is offered always with the views.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <a className="card-link" data-toggle="collapse" href="#question7">HOW MANY VIEWS ARE OFFERED EVERY DAY?</a>
                                    </div>
                                    <div id="question7" className="collapse" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Change in the speed can be observed with each package. Therefore, millions of views can be sent in a day also. For service, you can contact through email - <a href="mailto:support@buyyoutubviews.com" style={{textDecoration : 'underline'}}>support@buyyoutubviews.com</a></p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Faq;