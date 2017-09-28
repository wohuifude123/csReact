import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodo from '../components/AddTodo'

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
    render() {
        const { dispatch } = this.props
        return (
            <div>
                <AddTodo
                    onAddClick={text =>
                        dispatch(addTodo(text))
                    } />
            </div>
        )
    }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default App

