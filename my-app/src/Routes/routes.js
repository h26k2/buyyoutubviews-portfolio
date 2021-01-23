import React from 'react'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'

import Home from '../Screens/Home'
import Nav from '../Components/Nav'
import Topbar from '../Components/Topbar'
import Slider from '../Components/Slider'
import Faq from '../Screens/Faq'
import Footer from '../Components/Footer'
import Refund from '../Screens/Refund'
import Privacy from '../Screens/Privacy'
import Terms from '../Screens/Terms'
import ShopifyFollowers from '../Screens/ShopifyFollowers'
import ShopifyPlays from '../Screens/ShopifyPlays'
import SoundcloudPlays from '../Screens/SoundcloudPlays'
import SoundcloudFollowers from '../Screens/SoundcloudFollowers'
import TwitterFollowers from '../Screens/TwitterFollowers'
import TwitterViews from '../Screens/TwitterViews'
import FacebookLikes from '../Screens/FacebookLikes'
import FacebookFollowers from '../Screens/FacebookFollowers'
import FacebookPhotoLikes from '../Screens/FacebookPhotoLikes'
import FacebookViews from '../Screens/FacebookViews'
import FacebookComments from '../Screens/FacebookComments'

class Routes extends React.Component{
    render(){
        return(
            <Router>
                <Topbar />
                <Nav />
                <Slider/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/faq" component={Faq}/>
                    <Route path="/refunds" component={Refund}/>
                    <Route path="/privacy" component={Privacy} />
                    <Route path="/terms" component={Terms} />
                    

                    <Route path="/buy-spotify-followers" component={ShopifyFollowers}/>
                    <Route path="/buy-spotify-plays" component={ShopifyPlays}/>

                    <Route path="/soundcloud-plays" component={SoundcloudPlays} />
                    <Route path="/soundcloud-followers" component={SoundcloudFollowers}/>

                    <Route path="/twitter-followers" component={TwitterFollowers}/>
                    <Route path="/twitter-views" component={TwitterViews}/>

                    <Route path="/facebook-likes" component={FacebookLikes}/>
                    <Route path="/facebook-followers" component={FacebookFollowers}/>
                    <Route path="/facebook-post-photo" component={FacebookPhotoLikes}/>
                    <Route path="/buy-facebook-video-views" component={FacebookViews}/>
                    <Route path="/buy-facebook-comments" component={FacebookComments}/>



                </Switch>
                <Footer/>
            </Router>
        )
    }
}

export default Routes;