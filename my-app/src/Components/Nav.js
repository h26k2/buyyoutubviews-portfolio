
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
                            <Link exact to="#" className="nav-link dropdown-toggle"  data-toggle="dropdown">youtube</Link>
                            <div className="dropdown-menu">
                                <Link to ="/buy-youtube-views" className="dropdown-item">buy youtube views</Link>
                                <Link to ="/buy-youtube-views-likes" className="dropdown-item">youtube views and likes</Link>
                                <Link to ="/youtube-likes" className="dropdown-item">buy youtube likes</Link>
                                <Link to ="/youtube-subscribers" className="dropdown-item">buy youtube subscribers</Link>
                                <Link to ="/youtube-comments" className="dropdown-item">buy youtube comments</Link>
                                <Link to ="/youtube-high-retention" className="dropdown-item">high retention views</Link>
                                <Link to ="/country-targeted-youtube-views" className="dropdown-item">country targeted views</Link>
                                <Link to ="/buy-youtube-live-stream-views" className="dropdown-item">youtube live stream views</Link>
                                <Link to ="/buy-youtube-views-subscribers" className="dropdown-item">youtube views & subscribers</Link>
                                <Link to ="/buy-youtube-views-comments" className="dropdown-item">youtube views, likes & comments</Link>
                                <Link to ="/buy-youtube-views-likes-comments" className="dropdown-item">youtube views, likes & comments</Link>
                                <Link to ="/buy-youtube-views-likes-subscribers" className="dropdown-item">youtube views, likes & subscribers</Link>
                                <Link to ="/buy-premium-views" className="dropdown-item">buy youtube premium views</Link>
                                <Link to ="/buy-youtube-cheap-views" className="dropdown-item">buy youtube cheap views</Link>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle"  data-toggle="dropdown">facebook</Link>
                            <div className="dropdown-menu">
                                <Link to ="/facebook-likes" className="dropdown-item">facebook likes</Link>
                                <Link to ="/facebook-followers" className="dropdown-item">facebook followers</Link>
                                <Link to ="/facebook-post-photo" className="dropdown-item">facebook post & photo</Link>
                                <Link to ="/buy-facebook-video-views" className="dropdown-item">facebook video views</Link>
                                <Link to ="/buy-facebook-comments" className="dropdown-item">facebook comments</Link>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle"  data-toggle="dropdown">twitter</Link>
                            <div className="dropdown-menu">
                                <Link to ="/twitter-followers" className="dropdown-item">twitter followers</Link>
                                <Link to ="/twitter-views" className="dropdown-item">twitter views</Link>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle"  data-toggle="dropdown">instagram</Link>
                            <div className="dropdown-menu">
                                <Link to ="/instagram-followers" className="dropdown-item">instagram followers</Link>
                                <Link to ="/instagram-likes" className="dropdown-item">instagram likes</Link>
                                <Link to ="/instagram-views" className="dropdown-item">instagram views</Link>
                                <Link to ="/instagram-comments" className="dropdown-item">instagram comments</Link>
                                <Link to ="/how-to-gain-followers-on-instagram" className="dropdown-item">how to gain followers on instagram</Link>
                                <Link to ="/how-to-get-followers-on-instagram" className="dropdown-item">how to get followers on instagram</Link>
                                <Link to ="/how-to-get-more-followers-on-instagram" className="dropdown-item">how to get more followers on instagram</Link>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle"  data-toggle="dropdown">soundcloud</Link>
                            <div className="dropdown-menu">
                                <Link to ="/soundcloud-followers" className="dropdown-item">soundcloud followers</Link>
                                <Link to ="/soundcloud-plays" className="dropdown-item">soundcloud plays</Link>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle"  data-toggle="dropdown">spotify</Link>
                            <div className="dropdown-menu">
                                <Link to ="/buy-spotify-followers" className="dropdown-item">spotify followers</Link>
                                <Link to ="/buy-spotify-plays" className="dropdown-item">spotify plays</Link>
                            </div>
                        </li>

                    </ul>

                </div>

            </nav>
        )
    }
}

export default Nav;