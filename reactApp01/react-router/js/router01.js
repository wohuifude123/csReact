import React from 'react'
import { Router, Route, Link } from 'react-router'

const App = React.createClass({/*...*/})
const About = React.createClass({/*...*/})
// 等等。

const Users = React.createClass({
    render() {
        return (
            <div>
                <h1>Users</h1>
                <div className="master">
                    <ul>
                        {/* 在应用中用 Link 去链接路由 */}
                        {this.state.users.map(user => (
                            <li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="detail">
                    {this.props.children}
                </div>
            </div>
        )
    }
})

const User = React.createClass({
    componentDidMount() {
        this.setState({
            // 路由应该通过有用的信息来呈现，例如 URL 的参数
            user: findUserById(this.props.params.userId)
        })
    },

    render() {
        return (
            <div>
                <h2>{this.state.user.name}</h2>
                {/* 等等。 */}
            </div>
        )
    }
})

// 路由配置说明（你不用加载整个配置，
// 只需加载一个你想要的根路由，
// 也可以延迟加载这个配置）。
React.render((
    <Router>
        <Route path="/" component={App}>
            <Route path="about" component={About}/>
            <Route path="users" component={Users}>
                <Route path="/user/:userId" component={User}/>
            </Route>
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>
), document.body)