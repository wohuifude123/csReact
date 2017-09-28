import React, { Component, PropTypes } from 'react'
import Todo from './Todo'

/*
    (todo, index) =>
        <Todo {...todo}
            key={index}
            onClick={() => this.props.onTodoClick(index)} />

    参数todo，index
    
    onClick={return this.props.onTodoClick(index)}

    var f = () => 5;
    // 等同于
    var f = function () { return 5 };

    var sum = (num1, num2) => num1 + num2;
    // 等同于
    var sum = function(num1, num2) {
        return num1 + num2;
    };

    由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号。

    var getTempItem = id => ({ id: id, name: "Temp" });

*/


export default class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) =>
                    <Todo {...todo}
                          key={index}
                          onClick={() => this.props.onTodoClick(index)} />
                )}
            </ul>
        )
    }
}

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
}
