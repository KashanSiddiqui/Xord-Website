import React, {Component} from 'react';
import {
    Router,
    Route
} from 'react-router-dom'
import Home from '../components/home'
import Token from'../components/token'
import Ico from '../components/ico'
import Blog from '../components//blog'
const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home}></Route>
            <Route path="/token" component={Token}></Route>
            <Route path="/ico" component={Ico}></Route>
            <Route path="/blog" component={Blog}></Route>
        </div>
    </Router>

)
export default Routes;