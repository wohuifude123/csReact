import React from 'react';

//  React中并不一定要用JSX
//  JSX只是React.createElement(component, props, ...children)的语法糖，完全可以用原生JS替代

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return React.createElement('div', null, `第一个Hello ${this.props.name}`);
    }
}


export default App;