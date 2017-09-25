import React from 'react';

import createReactClass from 'create-react-class';
let MyComponent01 = createReactClass({
//let MyComponent01 = React.createClass({
    getInitialState: function() {
        return {clickNum: 0};
    },
    handleClick:function(){
        var num=this.state.clickNum;
        num++;
        this.setState({clickNum:num});
    },
    render: function() {
        return (
            <div>
                <h1 onClick={this.handleClick}>Hello {this.props.name}!</h1>
                <h2 style={{color:'red'}}>点击{this.props.name}次数：{this.state.clickNum}</h2>
            </div>
        );
    }
});

export default MyComponent01;

