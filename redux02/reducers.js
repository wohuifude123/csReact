import { ADD_TODO, VisibilityFilters, SET_VISIBILITY_FILTER } from './actions'
import { combineReducers } from 'redux'

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


const todoApp = combineReducers({
    // visibilityFilter,
    todos
})

export default todoApp
