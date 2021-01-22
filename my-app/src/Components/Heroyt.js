import React from 'react'
import heroImg from '../Images/youtube-hero-image.png'

class Heroyt extends React.Component{
    render(){
        return(
            <div className="container-fluid heroyt">
                <div className="container">
                    <div className="row" style={{marginBottom:'3em'}}>
                        <div className="col-6">
                            <img src={heroImg} alt="youtube section hero "/>
                        </div>
                        <div className="col-6">
                            <h4>leading</h4>
                            <h2 className="my-heading">youtube packs</h2>
                            <p>Being the leader in the world of attracting views and followers for
                                social media channel, buyyoutubeviews can help you beyond your
                                expectation. By trusting us, you may not be disappointed ever.
                                Our experienced professionals will bring you more views on your
                                videos. Engaging and thought provoking videos are always crowd
                                pullers. Both entertainment and engagement are the key factor
                                here. Professional may able to tell you what works and what don’t
                                in social media. If you have an excellent video then it may become
                                viral also. As a result, your company becomes popular and
                                manages to earn the trust of customers. Increase in ROI may be
                                an added advantage here that may help you grow your business further.
                            </p>
                        </div>

                    </div>

                    <div className="row ">
                        
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="card-1">
                                <i className="fab fa-youtube fa-4x"></i>
                                <p>youtube views</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="card-1">
                                <i className="far fa-star fa-4x"></i>
                                <p>Special Packs</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="card-1">
                                <i className="fab fa-youtube fa-4x"></i>
                                <p>Youtube Subscribers</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="card-1">
                                <i className="far fa-thumbs-up fa-4x"></i>
                                <p>Youtube Likes</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="card-1">
                                <i className="fab fa-youtube fa-4x"></i>
                                <p>Youtube Comments</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="card-1">
                                <i className="fab fa-youtube fa-4x"></i>
                                <p>High Retention Views</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="card-1">
                                <i className="fas fa-globe-americas fa-4x"></i>
                                <p>Country Targeted Views</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="card-1">
                                <i className="fab fa-youtube fa-4x"></i>
                                <p>USA High Retention</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="card-1">
                                <i className="fab fa-youtube fa-4x"></i>
                                <p>UK High Retention</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="card-1">
                                <i className="fab fa-youtube fa-4x"></i>
                                <p>Youtube Speed Packs</p>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        )
    }
}

export default Heroyt;