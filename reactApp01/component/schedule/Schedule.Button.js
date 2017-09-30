import React from 'react';

class ScheduleButton extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {


    }

    render() { //使用JSX返回节点
        return (
            <button onClick={this.props.setSecondsElapsed}>增加我的数字+组件</button>
        );
    }
}

export default ScheduleButton;
