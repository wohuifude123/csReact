import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        // componentDidMount 组件渲染完成 已经出现在 dom 文档里
        /*
            在初始化render之后只执行一次，在这个方法内，可以访问任何组件
            componentDidMount()方法中的子组件在父组件之前执行
            从这个函数开始，就可以和 JS 其他框架交互了，例如设置计时 setTimeout 或者 setInterval，或者发起网络请求
        */
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        // componentWillMount 组件出现前 就是dom还没有渲染到 html 文档里面
        /*
            当组件要被从界面上移除的时候，就会调用componentWillUnmount()
            在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等
         */
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;

