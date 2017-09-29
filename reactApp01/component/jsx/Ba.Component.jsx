import React from 'react';

import ClockButton from './Ba.Button.jsx';


const element =(enumber) => (
    <div>
        <ClockButton Clear={a}/>
        <h1>自己写的定时组件</h1>
        <h2>我的时间是{enumber}</h2>
    </div>
);

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {number: 0};
    }

    tick() {

        const nextNumber = this.state.number + 1

        this.setState({ number: nextNumber });

    }

    componentDidMount() {
        let a = setInterval(this.tick, 3000);
    }

    render() {
        return (
            element(this.state.number)
        );
    }
}
export default Clock;


