import React from 'react';

// 按钮
import LoginButton from './Login.Button.jsx';
import LogoutButton from './Logout.Button.jsx';

import GreetingWelcome from './GreetingWelcome.Component.jsx';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        //const isLoggedIn_const = this.props.isLoggedIn;
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};

    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                {/*<GreetingWelcome isLoggedIn={true} />*/}
                {<GreetingWelcome isLoggedIn={false} />}
                {button}
            </div>
        );

    }

}

export default Greeting;
