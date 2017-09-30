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

// 点击按钮 发出了增加 text 的 action 请求

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

            }
        ]
    }
 */

// actions.js 中的 VisibilityFilters
/*
    selectTodos(state.todos, state.visibilityFilter)

    state.visibilityFilter 等于 'SHOW_ALL'

    VisibilityFilters.SHOW_ALL 的值等于 'SHOW_ALL'

    statv.todos 返回空值
 */
function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
    }
}

/*
    {
        visibilityFilter: SHOW_ALL,
        visibleTodos: [
            selectTodos(state.todos, state.visibilityFilter)
        ]
    }

 */

// visibilityFilter 未知

// Which props do we want to inject, given the global state?

/*
    visibilityFilter: state.visibilityFilter

    state 调用了 reducers 中方法 visibilityFilter 返回默认值为 'SHOW_ALL'

    第一个 visibilityFilter 为 'SHOW_ALL'
 */


function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(App);

/*
    state = []

    visibleTodos: []，空数组，中间的大括号也去掉，因为那个代表空对象。这个空数组是什么元素都没有的
    {
        visibilityFilter: 'SHOW_ALL',
        visibleTodos: [

        ]
    }

 */

/*

        visibilityFilter: state.visibilityFilter这句我能理解为

        state调用reducers.js中的一个名为visibilityFilter的reducer

        返回字符串'SHOW_ALL'

        visibleTodos: selectTodos(state.todos, state.visibilityFilter)

        这句理解为

        function selectTodos(todos, filter) {
            switch (filter) {
                case VisibilityFilters.SHOW_ALL:
                    return todos
            }
        }

        filter是'SHOW_ALL'

        state调用了reducers.js中的一个名为todos的reducer

        返回这样的数据

        {
            text: action.text,
            completed: false
        }

        最后数据的形式是

        {
            visibilityFilter: SHOW_ALL,
            visibleTodos: [
                {
                    text: action.text,
                    completed: false
                },
                {
                    text: action.text,
                    completed: false
                },
                {
                    text: action.text,
                    completed: false
                }
            ]
        }

        大体上没问题，对reducer的理解有点偏差。

        reducer是用于响应action的，比如你add一个todo项，经过todos这个reducer处理，把你添加的这个todo加到todos里面去。

        至于state.visibilityFilter，是代表全局state下面visibilityFilter这个模块。

        redux的state是树形的，根据不同 模块/功能/自定义规则 来划分state模块，不同模块之间互不干扰。

        每个state模块可以是任意数据类型，在你这里todos是数组，visibilityFilter是字符串。
        至于模块如何划分，在combindReducer里，
        这里用了es6的写法，简单说就是属性名和变量名重名的时候可以只写一个，等价于

        const todoApp = combineReducers({
            visibilityFilter: visibilityFilter,
            todos: todos,
        })

        前面的属性名是可以改的，比如：

        const todoApp = combineReducers({
            _visibilityFilter: visibilityFilter,
            _todos: todos,
        })
        
        那么你访问的时候就不是state.visibilityFilter，而是state._visibilityFilter了
 */
