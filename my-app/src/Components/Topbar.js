
import React from 'react'
import {Link} from 'react-router-dom'

class Topbar extends React.Component{
    render(){
        return(
            <div className="topbar container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-9">

                        <ul>
                        
                            <li>
                                <Link to="/">About</Link>
                            </li>

                            <li>
                                <Link to="/">Testimonial</Link>
                            </li>

                            <li>
                                <Link to="/">Contact</Link>
                            </li>

                            <li>
                                <Link to="/">FAQ</Link>
                            </li>

                            <li>
                                <Link to="/">Refund Policy</Link>
                            </li>

                            <li>
                                <Link to="/">Privacy Policy</Link>
                            </li>
                        
                            <li>
                                <Link to="/"> Term & Conditions</Link>
                            </li>
                    
                        </ul>


                    </div>

                    <div className="col-12 col-lg-3">

                        <ul>
                    
                            <li>
                                <Link to="/">
                                    <i className="fas fa-rss fa-lg"></i>
                                </Link>
                            </li>

                            <li>
                                <Link to="/">
                                    <i className="fab fa-twitter fa-lg"></i>
                                </Link>
                            </li>

                            <li>
                                <Link to="/">
                                    <i className="fas fa-envelope fa-lg"></i>
                                </Link>
                            </li>

                            <li>
                                <Link to="/">
                                    <i className="fab fa-skype fa-lg"></i>
                                </Link>
                            </li>

                        </ul>

                    </div>

                </div>

            </div>
        )
    }
}

export default Topbar;