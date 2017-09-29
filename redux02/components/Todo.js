import React, { Component } from 'react'
import PropTypes from 'prop-types'
/*
    text-decoration:underline;     下划线
    text-decoration:overline;      顶划线
    text-decoration:line-through;  删除线
    text-decoration:blink;         闪烁

    -moz-text-decoration-line: overline; // 针对 Firefox 的代码
 */
export default class Todo extends Component {
    render() {
        return (
            <li
                style={{
                    textDecoration: this.props.completed ? 'line-through' : 'none',
                    cursor: this.props.completed ? 'default' : 'pointer'
                }}>
                {this.props.text}
            </li>
        )
    }
}
