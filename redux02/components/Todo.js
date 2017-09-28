import React, { Component, PropTypes } from 'react'
/*
    text-decoration:underline;     下划线
    text-decoration:overline;      顶划线
    text-decoration:line-through;  删除线
    text-decoration:blink;         闪烁
 */
export default class Todo extends Component {
    render() {
        return (
            <li
                onClick={this.props.onClick}
                style={{
                    textDecoration: this.props.completed ? 'line-through' : 'none',
                    cursor: this.props.completed ? 'default' : 'pointer'
                }}>
                {this.props.text}
            </li>
        )
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}
