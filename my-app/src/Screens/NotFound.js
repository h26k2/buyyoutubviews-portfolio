import React from 'react'

class NotFound extends React.Component{
    render(){
        return(
            <div className="not-found">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="my-subheading dh4">not found</h4>
                            <h2 className="my-heading dh2">sorry this page is <span className="my-red">not found</span></h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound;