import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo, VisibilityFilters } from '../actions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'

/*
    let [x, y] = [1, 2, 3];
    x // 1
    y // 2

    let [a, [b], d] = [1, [2, 3], 4];
    a // 1
    d // 4
    b // 2

    let { foo, bar } = { foo: "aaa", bar: "bbb" };
    foo // "aaa"
    bar // "bbb"
 */

/*
    Store 就是把它们联系到一起的对象。Store 有以下职责：

    维持应用的 state；
    提供 getState() 方法获取 state；
    提供 dispatch(action) 方法更新 state；
    通过 subscribe(listener) 注册监听器;
    通过 subscribe(listener) 返回的函数注销监听器。

    // Dispatch some actions
    store.dispatch(addTodo('Learn about actions'))
    store.dispatch(addTodo('Learn about reducers'))
    store.dispatch(addTodo('Learn about store'))
 */

// 点击按钮 发出了增加 text 的action请求
class App extends Component {
    // todos={visibleTodos} 采集 visibleTodos 数据
    render() {

        const { dispatch, visibleTodos } = this.props
        return (
            <div>
                <AddTodo
                    onAddClick={text =>
                        dispatch(addTodo(text))
                    } />
                <TodoList
                    todos={visibleTodos}
                />
            </div>
        )
    }
}


/*
    {
      visibilityFilter: 'SHOW_ALL',
      todos: [
        {
          text: 'Consider using Redux',
          completed: true,
        },
        {
          text: 'Keep all state in a single tree',
          completed: false
        }
      ]
    }
 */


/*
    使用 todos 方法，返回 state 数据，构建数据完毕
    {
        visibilityFilter: 'SHOW_ALL',
        visibleTodos: [
            {
                text: 'Consider using Redux',
                completed: true,
            },
            {
                text: 'Keep all state in a single tree',
                completed: false
            }
        ]
    }
 */

// actions.js 中的 VisibilityFilters
/*
    selectTodos(state.todos, state.visibilityFilter)

    state.visibilityFilter 等于 SHOW_ALL
 */
function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
    }
}

/*
    {
        visibilityFilter: 'SHOW_ALL',
        visibleTodos: [
            selectTodos(state.todos, state.visibilityFilter)
        ]
    }

 */

// visibilityFilter



// Which props do we want to inject, given the global state?
function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(App);
