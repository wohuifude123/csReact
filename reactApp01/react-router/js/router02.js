import React from 'react'
// 使用 ES6 的转译器，如 babel
import { Router, Route, hashHistory } from 'react-router'

import About from '../component/About'
import Repos from '../component/Repos'

class Router02 extends React.Component {
    constructor() {
        super();
    }
    render() {
        return  <Router history={hashHistory}>
                    <Route path="/" component={App}/>
                        {/* add the routes here */}
                    <Route path="/repos" component={Repos}/>
                    <Route path="/about" component={About}/>
                </Router>;
    }


}

export default Router02;