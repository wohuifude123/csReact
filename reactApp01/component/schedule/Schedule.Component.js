import React from 'react';
import Detail from './Detail.Component.js';
import ScheduleButton from './Schedule.Button.js';

class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = { secondsElapsed: 0 };
    }

    handleClick() {
        const secondsElapsed_const = this.state.secondsElapsed + 1;
        this.setState({ secondsElapsed: secondsElapsed_const });

    }

    render() { //使用JSX返回节点
        return (
            <div>
                <h1>自己独立组件</h1>
                <div>显示我的点击 == {this.state.secondsElapsed}</div>
                <Detail seconds={this.state.secondsElapsed}/>
                <ScheduleButton setSecondsElapsed={this.handleClick.bind(this)}/>
            </div>
        );
    }
}

export default Schedule;
