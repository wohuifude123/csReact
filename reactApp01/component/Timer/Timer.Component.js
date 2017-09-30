import React from 'react';

import PropTypes from 'prop-types';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { secondsElapsed: 0 };
    }

    tick() { //自定义方法
        this.setState({
            secondsElapsed: this.state.secondsElapsed + 1
        });
    }

    componentDidMount() {// 生命周期函数
        // mountain 山脉 mount 增加
        // 错误
        // this.interval = setInterval(this.tick, 1000);

        this.interval = setInterval(()=> this.tick(), 1000);
        // componentDidMount
        // 渲染完成后调用一次，这个时候 DOM 结构已经渲染了。
        // 这个时候就可以初始化其他框架的设置了，如果利用jQuery绑定事件等等。
    }

    componentWillUnmount() {//生命周期函数
        // componentWillUnmount
        // 组件移除前调用。
        clearInterval(this.interval);
    }

    render() { //使用JSX返回节点
        return (
            <div>
                分秒 Seconds Elapsed == {this.state.secondsElapsed}
            </div>
        );
    }
}

export default Timer;
