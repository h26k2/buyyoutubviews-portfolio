
import React from 'react'
import {NavLink , Link} from 'react-router-dom'
import Logo from '../Images/logo.webp'

class Nav extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-sm bg-light">

                <Link to="/" className="navbar-brand">brand name</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navlinks-container">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navlinks-container">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <Link to="/" className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">something</Link>
                            <div className="dropdown-menu">
                                <Link to ="/" className="dropdown-item">Link 1</Link>
                                <Link to ="/" className="dropdown-item">Link 2</Link>
                                <Link to ="/" className="dropdown-item">Link 3</Link>
                            </div>
                        </li>
                    </ul>
                </div>

            </nav>
        )
    }
}

export default Nav;