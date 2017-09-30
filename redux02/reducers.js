import { ADD_TODO, VisibilityFilters, SET_VISIBILITY_FILTER,  } from './actions'
import { combineReducers } from 'redux'

const { SHOW_ALL } = VisibilityFilters

/*

    let [foo, [[bar], baz]] = [1, [[2], 3]];
    foo // 1
    bar // 2
    baz // 3

    let [ , , third] = ["foo", "bar", "baz"];
    third // "baz"

    let [x, , y] = [1, 2, 3];
    x // 1
    y // 3

    let [head, ...tail] = [1, 2, 3, 4];
    head // 1
    tail // [2, 3, 4]

    let [x, y, ...z] = ['a'];
    x // "a"
    y // undefined
    z // []

*/

// SHOW_ALL = 'SHOW_ALL'

// 可见性过滤器 功能

// 实现增加命令 SHOW_ALL 仍为 'SHOW_ALL'
function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
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
const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
};
*/

// Object.assign({}, state, { visibilityFilter: action.filter })
// 浅拷贝了 state 然后重写了 visibilityFilter 这个 key 的值

// 判断 action.type 是 ADD_TODO 返回

/*
    增加 新的数据
    {
        text: action.text,
        completed: false
    }
 */
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO: // 构造数据，增加数据
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        default:
            return state
    }
}

// 传递过来 type: ADD_TODO和text 然后调用 visibilityFilter和todos 两个方法
const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp

/*
    todos和visibilityFilter不是方法，它们是reducer，用于存放及处理对应的state。
    点击添加按钮，生成action，根据action.type进入不同的处理函数，
    这里action.type是todos里的ADD_TODO，然后todos对应的state改变，触发App的select方法，
    再返回visibleTodos时，根据visibilityFilter的state来决定展现什么todos，
    然后返回处理过的todos（这里是展现全部所以实际没处理），触发todoList视图更新
 */
