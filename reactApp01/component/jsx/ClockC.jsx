import React from 'react';

class ClockC extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    tick() {
        const nextCount = this.state.count + 1

        this.setState({ count: nextCount });

        setTimeout(this.tick.bind(this), 1000);
    }

    render() {
        return <div>{this.state.count}</div>;
    }

    componentDidMount() {
        // componentDidMount 组件渲染完成，已经出现在dom文档里
        this.tick();
    }
}

export default ClockC;