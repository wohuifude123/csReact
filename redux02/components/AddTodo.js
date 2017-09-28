import React, { Component, PropTypes } from 'react'
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions'
import { connect } from 'react-redux'

/*
    先给一个组件设置一个 ref='xxx' 的属性，注意这个ref必须是全局唯一的。

    <input ref=‘city’ />

    然后就可以通过 this.refs.city 来访问这个组件。
 */

export default class AddTodo extends Component {
    render() {
        return (
            <div>
                <input type='text' ref='input' />
                <button onClick={(e) => this.handleClick(e)}>
                    Add
                </button>
            </div>
        )
    }

    handleClick(e) {
        const node = this.refs.input
        const text = node.value.trim()
        this.props.onAddClick(text)
        node.value = ''
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
}
