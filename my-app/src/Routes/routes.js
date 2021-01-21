import React from 'react'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'

import Home from '../Screens/Home'
import Nav from '../Components/Nav'
import Topbar from '../Components/Topbar'

class Routes extends React.Component{
    render(){
        return(
            <Router>
                <Topbar />
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;