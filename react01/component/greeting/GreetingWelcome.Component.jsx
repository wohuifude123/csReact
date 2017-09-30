import React from 'react';

import GuestGreeting from './GuestGreeting.Component.jsx';
import UserGreeting from './UserGreeting.Component.jsx';




class GreetingWelcome extends React.Component {
    constructor(props) {
        super(props);

        this.isLoggedIn_const = this.props.isLoggedIn;

        this.messages = ['React', 'Re: React', 'Re:Re: React'];

    }

    render(){

        const unreadMessages = this.messages;

        if (this.isLoggedIn_const) {
            //if (this.props.isLoggedIn) {
            return (
                <div>
                    <h1>{this.isLoggedIn_const.toLocaleString()}</h1>
                    {
                        unreadMessages.length > 0 &&
                        <h2>
                            You have {unreadMessages.length} 读了的 messages.
                        </h2>
                    }
                    <h1>正确</h1>
                    <UserGreeting />
                </div>
            );
        } else {
            return (
                <div>
                    <h1>{this.isLoggedIn_const.toLocaleString()}</h1>
                    {
                        unreadMessages.length > 0 &&
                        <h2>
                            You have {unreadMessages.length} unread messages.
                        </h2>
                    }
                    <h1>错误</h1>
                    <GuestGreeting />
                </div>
            );
        }

    }

}

export default GreetingWelcome;
