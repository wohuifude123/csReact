import React from 'react';
import Avatar from './Avatar.component.jsx';

/*
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
*/
class UserInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className="UserInfo">
                <Avatar user={this.props.user} />
                <div className="UserInfo-name">
                    {this.props.user.name}
                </div>
            </div>
        );
    }

}

export default UserInfo;
