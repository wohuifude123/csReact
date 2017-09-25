import React from 'react'
// 使用 ES6 的转译器，如 babel
import { Router, Route } from 'react-router'//修改之处
import createHashHistory from 'history/createHashHistory'//修改之处
// import { Router, Route, hashHistory } from 'react-router'

import About from '../component/About'
import Repos from '../component/Repos'
import App from '../component/App'

const hashHistory=createHashHistory()//修改之处

class RouterAppHash extends React.Component {
    constructor() {
        super();
    }
    render() {
        return  <Router history={hashHistory}>
            <div>
            <Route path="/" component={App}/>
            {/* add the routes here */}
            <Route path="/repos" component={Repos}/>
            <Route path="/about" component={About}/>
            </div>

        </Router>;

    }


}

export default RouterAppHash;
