import React from 'react'
import quotes from '../Images/quotes.png'

class Testimonial extends React.Component{

    render(){
        return(
            <div className="container-fluid testimonials" style={{backgroundImage : `url('${quotes}')`}} id="testimonials">
                <div className="container">
                    <div className="row">

                        <div className="col-12">
                            <h4>client's love</h4>
                            <h2 className="my-heading">testimonials</h2>                          
                        </div>

                        <div className="col-12">

                            <div id="testimonial" className="carousel slide" data-ride="carousel">
                
                                <ul className="carousel-indicators">
                                    <li data-target="#testimonial" data-slide-to="0" className="active"></li>
                                    <li data-target="#testimonial" data-slide-to="1" ></li>
                                    <li data-target="#testimonial" data-slide-to="2"></li>
                                    <li data-target="#testimonial" data-slide-to="3" ></li>
                                </ul>

                                <div className="carousel-inner">
                                    
                                    <div className="carousel-item active" >
                                        <div className="carousel-caption">
                                            <p>"I am really happy with your service. Delivery is offered as promised. In mere 24 hours, I have seen
                                                results. Flood of business demands have started to come. Pricing of the pack is reasonable. Therefore, I
                                                have even recommended the service to my friends. It is really a pleasure to work with the experienced
                                                professionals of this company. Since, professionals have been looking after the social media
                                                engagement of the company. Therefore, I have managed to work more on improving the business. It
                                                has been my first video. So, I have some queries which has resolved easily by the professional within
                                                minutes. It is really hard to find a competent service like you"
                                            </p>
                                            <div className="person">
                                                <div className="person-image"></div>
                                                <span className="person-name">James Potter</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-item" >
                                        <div className="carousel-caption">
                                            <p>"Popularity of my social media site is increasing with each passing day and I really like to thank the professionals of this company from the bottom of my heart. In the past also, I have posted videos on Youtube. However, numbers of the likes have been really hard to enhance. Being a small company, it has not been possible to invest a lot of money on advertisement. From a friend, I have got the contact of the company. They have really helped me with affordable solutions. I have trusted them completely and now I can see excellent results. Service of this company must be recommended highly."
                                            </p>
                                            <div className="person">
                                                <div className="person-image"></div>
                                                <span className="person-name">Elizabeth Jonas</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-item" >
                                        <div className="carousel-caption">
                                            <p>"Making a video viral online is never easy. Therefore, I have decided to take help from this company and I have not been disappointed at all. Due to prompt nature of the service, results can be seen in relatively lesser amount of time. Cheap bundle packs are excellent. Dedication of the professional ensures positive results. I am grateful to these professional for their remarkable service. I certainly wish to work with them in future as well."
                                            </p>
                                            <div className="person">
                                                <div className="person-image"></div>
                                                <span className="person-name">Samuel Peterson</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-item" >
                                        <div className="carousel-caption">
                                            <p>"Today, it is really hard to survive in the world of business without visibility in social media. Therefore, I have been trying to increase my brand engagement through the channels of social media. However, success is not seen even after some try. So, I decided to hire professionals and obtained result like magic. Now, I am really indebted to them. Thanks a lot guys."
                                            </p>
                                            <div className="person">
                                                <div className="person-image"></div>
                                                <span className="person-name">Gerard Thomas</span>
                                            </div>
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

export default Testimonial;