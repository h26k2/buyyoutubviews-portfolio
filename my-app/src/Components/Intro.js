import React from 'react'

class Intro extends React.Component{
    render(){
        return(
            <div className="intro container">
                <div className="row">
                    <div className="col-12">
                        <h3>do you want to </h3>
                        <h1>become a <span className="color-red">trend</span> in social media now?</h1>
                        <p>we recommend you four ways to achieve your goals and increase visibility for your business</p>
                    </div>
                    <div className="row">
                        
                        <div className="col-12 col-md-3">
                            <div className="card-1">
                                <i className="far fa-check-circle fa-4x"></i>
                                <h2>1000+</h2>
                                <p>Quality views</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-3">
                            <div className="card-1">
                                <i className="fab fa-facebook fa-4x"></i>
                                <h2>earn</h2>
                                <p>more from facebok</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-3">
                            <div className="card-1">
                                <i className="far fa-gem fa-4x"></i>
                                <h2>premium</h2>
                                <p>views</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-3">
                            <div className="card-1">
                                <i className="fab fa-youtube fa-4x"></i>
                                <h2>buy</h2>
                                <p>youtube cheap views</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default Intro;