import { ADD_TODO, VisibilityFilters } from './actions'
import { combineReducers } from 'redux'
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

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
};

// Object.assign({}, state, { visibilityFilter: action.filter })
// 浅拷贝了 state 然后重写了 visibilityFilter 这个 key 的值

// 判断 action.type 是 ADD_TODO 返回
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
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
    todos
})

export default todoApp
