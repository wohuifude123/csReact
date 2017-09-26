import React from 'react';
import ReactDOM from 'react-dom';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }
    handleClick(event) {
        const nextCount = !this.state.liked;
        this.setState({ liked: nextCount });
    }
    render() {
        var text = this.state.liked ? '喜欢' : '不喜欢';
        return (
            /*
                bind() 方法会创建一个新函数，当这个新函数被调用时，它的this值是传递给bind()的第一个参数,
                它的参数是 bind() 的其他参数和其原本的参数。

                bind() 最简单的用法是创建一个函数，使这个函数不论怎么调用都有同样的 this 值。

                JavaScript新手经常犯的一个错误是将一个方法从对象中拿出来，然后再调用，
                希望方法中的 this 是原来的对象（比如在回调中传入这个方法）。
                如果不做特殊处理的话，一般会丢失原来的对象。

                从原来的函数和原来的对象创建一个绑定函数，则能很漂亮地解决这个问题
             */
            <p onClick={this.handleClick.bind(this)}>
                你<b>{text}</b>我。点我切换状态。
            </p>
        );
    }
}

export default LikeButton;
