
import React from 'react'
import {Link} from 'react-router-dom'

class Slider extends React.Component{

    render(){
        return(
            <div id="demo" className="carousel slide" data-ride="carousel">
                
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                </ul>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.pexels.com/photos/3007347/pexels-photo-3007347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    </div>
                </div>

                <Link className="carousel-control-prev" to="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </Link>

                <Link className="carousel-control-prev" to="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </Link>


            </div>
        )
    }

}

export default Slider