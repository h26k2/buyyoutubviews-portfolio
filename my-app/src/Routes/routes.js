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
import InstagramFollowers from '../Screens/InstagramFollowers'
import InstagramLikes from '../Screens/InstagramLikes'
import InstagramViews from '../Screens/InstagramViews'
import InstagramComments from '../Screens/InstagramComments'
import InstaGainFollowers from '../Screens/InstaGainFollowers'
import InstaGetFollowers from '../Screens/InstaGetFollowers'
import InstaGetMoreFollowers from '../Screens/InstaGetMoreFollowers'
//import InstaTVViews from '../Screens/InstaTVViews'
import YoutubeViews from '../Screens/YoutubeViews'
import YoutubeViewsLikes from '../Screens/YoutubeViewsLikes'
import YoutubeLikes from '../Screens/YoutubeLikes'
import YoutubeSubscribers from '../Screens/YoutubeSubscribers'
import YoutubeComments from '../Screens/YoutubeComments'
import YoutubeHighRetention from '../Screens/YoutubeHighRetention'
import YoutubeCountryTargetedViews from '../Screens/YoutubeCountryTargetedViews'
import YoutubeLiveStreamViews from '../Screens/YoutubeLiveStreamViews'
import YoutubeViewsSubscribers from '../Screens/YoutubeViewsSubscribers'
import YoutubeViewsComments from '../Screens/YoutubeViewsComments'
import YoutubeViewsLikesComments from '../Screens/YoutubeViewsLikesComments'
import YoutubeViewsLikesSubscribers from '../Screens/YoutubeViewsLikesSubscribers'
import YoutubePremiumViews from '../Screens/YoutubePremiumViews'
import YoutubeCheapViews from '../Screens/YoutubeCheapViews'
import Zendesk from 'react-zendesk'
import NotFound from '../Screens/NotFound'

class Routes extends React.Component{

    render(){
        return(
            <Router>
                <Zendesk zendeskKey="7707a24f-aae8-49e8-aa7d-e31fce70cbae"  />
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


                    <Route path="/instagram-followers" component={InstagramFollowers}/>
                    <Route path="/instagram-likes" component={InstagramLikes}/>
                    <Route path="/instagram-views" component={InstagramViews}/>
                    <Route path="/instagram-comments" component={InstagramComments}/>
                    <Route path="/how-to-gain-followers-on-instagram" component={InstaGainFollowers}/>
                    <Route path="/how-to-get-followers-on-instagram" component={InstaGetFollowers}/>
                    <Route path="/how-to-get-more-followers-on-instagram" component={InstaGetMoreFollowers}/>
                    {/*<Route path="/buy-instagram-tv-views" component={InstaTVViews}/>*/}

                    <Route path="/buy-youtube-views" component={YoutubeViews}/>
                    <Route path="/buy-youtube-views-likes" component={YoutubeViewsLikes}/>
                    <Route path="/youtube-likes" component={YoutubeLikes}/>
                    <Route path="/youtube-subscribers" component={YoutubeSubscribers}/>
                    <Route path="/youtube-comments" component={YoutubeComments}/>
                    <Route path="/youtube-high-retention" component={YoutubeHighRetention}/>
                    <Route path="/country-targeted-youtube-views" component={YoutubeCountryTargetedViews}/>
                    <Route path="/buy-youtube-live-stream-views" component={YoutubeLiveStreamViews}/>
                    <Route path="/buy-youtube-views-subscribers" component={YoutubeViewsSubscribers}/>
                    <Route path="/buy-youtube-views-comments" component={YoutubeViewsComments}/>
                    <Route path="/buy-youtube-views-likes-comments" component={YoutubeViewsLikesComments}/>
                    <Route path="/buy-youtube-views-likes-subscribers" component={YoutubeViewsLikesSubscribers}/>
                    <Route path="/buy-premium-views" component={YoutubePremiumViews}/>
                    <Route path="/buy-youtube-cheap-views" component={YoutubeCheapViews}/>
                    
                    <Route component={NotFound}/>

                </Switch>
                <Footer/>
            </Router>
        )
    }
}

export default Routes;