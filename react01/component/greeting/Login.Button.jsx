import React from 'react';

class LoginButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <button onClick={this.props.onClick}>
                Login
            </button>
        );
    }

}

export default LoginButton;
