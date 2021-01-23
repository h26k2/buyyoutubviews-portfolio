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

                </Switch>
                <Footer/>
            </Router>
        )
    }
}

export default Routes;