import React from 'react';

import PropTypes from 'prop-types'; // ES6

class Person extends React.Component {
    constructor (props) {
        super(props);
        this.state = { smiling: false };
    }
    handleClick(){
        this.setState({smiling: !this.state.smiling});
    };
    componentWillMount () {
        // add event listeners (Flux Store, WebSocket, document, etc.)
    }
    componentDidMount () {
        // React.getDOMNode()
    }
    componentWillUnmount () {
        // remove event listeners (Flux Store, WebSocket, document, etc.)
    }
    smilingMessage () {
        const asmiling = this.state.smiling;
        return (this.state.smiling) ? "is smiling" : "";
    }
    render () {
        return (
            <div onClick={this.handleClick.bind(this)}>
                {this.props.name} {this.smilingMessage.bind(this)()}
            </div>
        );
    }
}

Person.defaultProps = {
    name: 'Guest'
};

Person.propTypes = {
    name: PropTypes.string
};

export default Person;
