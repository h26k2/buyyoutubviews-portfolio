import React from 'react'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'

import Home from '../Screens/Home'
import Nav from '../Components/Nav'
import Topbar from '../Components/Topbar'
import Slider from '../Components/Slider'
import Faq from '../Screens/Faq'
import Footer from '../Components/Footer'


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
                </Switch>
                <Footer/>
            </Router>
        )
    }
}

export default Routes;