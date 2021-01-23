import React from 'react'

class Intro extends React.Component{
    render(){
        return(
            <div className="intro container" id="intro-container">
                <div className="row">
                    <div className="col-12">
                        <h4>do you want to </h4>
                        <h2 className="my-heading">become a <span className="color-red">trend</span> in social media now?</h2>
                        <p>we recommend you four ways to achieve your goals and increase visibility for your business</p>
                    </div>
                </div>
                <div className="row">
                    
                    <div className="col-12 col-md-4 col-lg-3">
                        <div className="card-1" style={{backgroundColor : '#00e7a3'}}>
                            <i className="far fa-check-circle fa-3x"></i>
                            <h3>1000+</h3>
                            <h6>Quality views</h6>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 col-lg-3">
                        <div className="card-1" style={{backgroundColor : '#2c5a98'}}>
                            <i className="fab fa-facebook fa-3x"></i>
                            <h3>earn</h3>
                            <h6>more from facebok</h6>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 col-lg-3">
                        <div className="card-1" style={{backgroundColor : '#ffbf00'}} >
                            <i className="far fa-gem fa-3x"></i>
                            <h3>premium</h3>
                            <h6>views</h6>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 col-lg-3">
                        <div className="card-1" style={{backgroundColor : '#ff3728'}} >
                            <i className="fab fa-youtube fa-3x"></i>
                            <h3>buy</h3>
                            <h6>youtube cheap views</h6>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default Intro;