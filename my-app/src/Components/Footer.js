import React from 'react'
import {Link} from 'react-router-dom'
 
class Footer extends React.Component{
    render(){
        return(
            <footer className="container-fluid" id="contact">
                <span>contact on</span>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to="/"><i className="far fa-envelope fa-2x"></i></Link>
                            <Link to="/"><i className="far fa-comment-dots fa-2x"></i></Link>
                            <Link to="/"><i className="fab fa-skype fa-2x"></i></Link>
                            <Link to="/"><i className="far fa-paper-plane fa-2x"></i></Link>
                        </div>
                        <div className="col-12">
                            <p>For any order related issues please email us on ayha9n@gmail.com</p>
                        </div>
                        <div className="col-12">
                            <h6>copyright 2021 - buyyoutubviews.com - all rights reserved</h6>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;