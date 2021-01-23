
import React from 'react'
import {NavLink , Link} from 'react-router-dom'
import Logo from '../Images/logo.webp'

class Nav extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-sm bg-light sticky-top ">

                <Link to="/" className="navbar-brand">
                    <img src={Logo} alt="buyyoutubvideos.com logo" />
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navlinks-container">
                    <i className="fas fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse" id="navlinks-container">

                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item dropdown">
                            <NavLink exact to="/" className="nav-link dropdown-toggle"  data-toggle="dropdown">youtube</NavLink>
                            <div className="dropdown-menu">
                                <Link to ="/" className="dropdown-item">buy youtube views</Link>
                                <Link to ="/" className="dropdown-item">youtube views and likes</Link>
                                <Link to ="/" className="dropdown-item">buy youtube likes</Link>
                                <Link to ="/" className="dropdown-item">buy youtube subscribers</Link>
                                <Link to ="/" className="dropdown-item">buy youtube comments</Link>
                                <Link to ="/" className="dropdown-item">high retention views</Link>
                                <Link to ="/" className="dropdown-item">country targeted views</Link>
                                <Link to ="/" className="dropdown-item">youtube live stream views</Link>
                                <Link to ="/" className="dropdown-item">youtube views & subscribers</Link>
                                <Link to ="/" className="dropdown-item">youtube views, likes & comments</Link>
                                <Link to ="/" className="dropdown-item">youtube views, likes & comments</Link>
                                <Link to ="/" className="dropdown-item">youtube views, likes & subscribers</Link>
                                <Link to ="/" className="dropdown-item">buy youtube premium views</Link>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <NavLink to="/zz" className="nav-link dropdown-toggle"  data-toggle="dropdown">facebook</NavLink>
                            <div className="dropdown-menu">
                                <Link to ="/" className="dropdown-item">buy youtube views</Link>
                                <Link to ="/" className="dropdown-item">youtube views and likes</Link>
                                <Link to ="/" className="dropdown-item">buy youtube subscribers</Link>
                                <Link to ="/" className="dropdown-item">buy youtube comments</Link>
                                <Link to ="/" className="dropdown-item">high retention views</Link>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <NavLink to="/aa" className="nav-link dropdown-toggle"  data-toggle="dropdown">twitter</NavLink>
                            <div className="dropdown-menu">
                                <Link to ="/" className="dropdown-item">buy youtube views</Link>
                                <Link to ="/" className="dropdown-item">youtube views and likes</Link>
                                <Link to ="/" className="dropdown-item">buy youtube subscribers</Link>
                                <Link to ="/" className="dropdown-item">buy youtube comments</Link>
                                <Link to ="/" className="dropdown-item">high retention views</Link>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <NavLink to="/sssss" className="nav-link dropdown-toggle"  data-toggle="dropdown">instagram</NavLink>
                            <div className="dropdown-menu">
                                <Link to ="/" className="dropdown-item">buy youtube views</Link>
                                <Link to ="/" className="dropdown-item">youtube views and likes</Link>
                                <Link to ="/" className="dropdown-item">buy youtube subscribers</Link>
                                <Link to ="/" className="dropdown-item">buy youtube comments</Link>
                                <Link to ="/" className="dropdown-item">high retention views</Link>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <NavLink to="/s" className="nav-link dropdown-toggle"  data-toggle="dropdown">soundcloud</NavLink>
                            <div className="dropdown-menu">
                                <Link to ="/" className="dropdown-item">buy youtube views</Link>
                                <Link to ="/" className="dropdown-item">youtube views and likes</Link>
                                <Link to ="/" className="dropdown-item">buy youtube subscribers</Link>
                                <Link to ="/" className="dropdown-item">buy youtube comments</Link>
                                <Link to ="/" className="dropdown-item">high retention views</Link>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <NavLink to="/ss" className="nav-link dropdown-toggle"  data-toggle="dropdown">spotify</NavLink>
                            <div className="dropdown-menu">
                                <Link to ="/" className="dropdown-item">buy youtube views</Link>
                                <Link to ="/" className="dropdown-item">youtube views and likes</Link>
                                <Link to ="/" className="dropdown-item">buy youtube subscribers</Link>
                                <Link to ="/" className="dropdown-item">buy youtube comments</Link>
                                <Link to ="/" className="dropdown-item">high retention views</Link>
                            </div>
                        </li>

                    </ul>

                </div>

            </nav>
        )
    }
}

export default Nav;