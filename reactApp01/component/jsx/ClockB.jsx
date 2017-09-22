import React from 'react';

class ClockB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
       // componentDidMount 组件渲染完成，已经出现在dom文档里


    }
    componentWillUnmount() {
        // componentWillMount 组件出现前，就是dom还没有渲染到html文档里面

    }

    render() {
        return (
            <div>
                <h1>Hello, world!qweasd</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default ClockB;