import About from './Router/About'
import Repos from './Router/Repos'
import App from './Router/App'
import React from 'react'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';



import { Router, Route, hashHistory } from 'react-router'

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        {/* add the routes here */}
        <Route path="/repos" component={Repos}/>
        <Route path="/about" component={About}/>
    </Router>
), document.getElementById('app'))
