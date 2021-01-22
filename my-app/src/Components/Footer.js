import React from 'react'

class Footer extends React.Component{
    render(){
        return(
            <footer className="container-fluid">
                <span>contact us</span>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <i className="far fa-envelope"></i>
                            <i className="far fa-comment-dots"></i>
                            <i className="fab fa-skype"></i>
                            <i className="far fa-paper-plane"></i>
                        </div>
                        <div className="col-12">
                            <p>for any order related issues please email us on ayha9n@gmail.com</p>
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