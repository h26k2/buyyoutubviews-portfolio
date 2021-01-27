
import React from 'react'
//import {Link} from 'react-router-dom'

import pic1 from '../Images/Slider1.webp'


class Slider extends React.Component{

    render(){
        return(
            <div id="demo" className="carousel slide" data-ride="carousel">
                
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                </ul>

                <div className="carousel-inner">
                    <div className="carousel-item active" style={{backgroundImage : `url('${pic1}')`}}>
                        <div className="carousel-caption">
                            {/*<Link to="/" className="btn">get started</Link>*/}
                        </div>
                    </div>
                </div>

                {/*<Link className="carousel-control-prev" to="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </Link>

                <Link className="carousel-control-prev" to="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
        </Link>*/}


            </div>
        )
    }

}

export default Slider