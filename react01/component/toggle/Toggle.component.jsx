import React from 'react';

import UserWel from './UserWel.Component.jsx';

class Toggle extends React.Component {
    /*
        props 这个一般用于父组件到子组件的值传递
        state 用于组件内部的状态维护
     */
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <div>
                <UserWel  name={this.state.isToggleOn ? '凯凯凯' : '关关关'}/>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}

export default Toggle;
