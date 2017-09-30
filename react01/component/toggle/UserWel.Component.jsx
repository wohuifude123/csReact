import React from 'react';

class UserWel extends React.Component {
    constructor(props) {
        super(props);
        // const isLoggedIn_const = this.props.isLoggedIn;
        // this.state = {isLoggedIn: false};
    }

    render(){
        return (
            <h1>用户，{this.props.name}</h1>
        );
    }
}

export default UserWel;
