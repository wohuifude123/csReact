import React from 'react';

import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
    constructor (props) {
        super(props);
    }

    // 获取真实DOM  ReactDOM.findDOMNode函数
    // 将停止事件的传播
    // 阻止元素发生默认的行为

    handClick(event) {

        var tipE=ReactDOM.findDOMNode(this.refs.tip)
        if(tipE.style.display==="none"){
            tipE.style.display="inline"
        }else{
            tipE.style.display="none"
        }
        
        event.stopPropagation();

        event.preventDefault();
    }

    componentWillMount () {
        // add event listeners (Flux Store, WebSocket, document, etc.)

    }

    componentDidMount () {
        // React.getDOMNode()

    }

    componentWillUnmount () {
        // remove event listeners (Flux Store, WebSocket, document, etc.)

    }

    render () {
        return (
            <div>
                <button onClick={this.handClick}>显示|隐藏</button>
                <span ref="tip">测试显示隐藏</span>
            </div>
        );
    }
}

export default HelloMessage
