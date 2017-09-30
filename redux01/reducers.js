import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

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
        case COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
            ]
        default:
            return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})


/*
    combineReducers() 所做的只是生成一个函数，
    这个函数来调用你的一系列 reducer，每个 reducer 根据它们的 key 来筛选出 state 中的一部分数据并处理，
    然后这个生成的函数再将所有 reducer 的结果合并成一个大的对象。没有任何魔法。
    正如其他 reducers，如果 combineReducers() 中包含的所有 reducers 都没有更改 state，
    那么也就不会创建一个新的对象。
 */
export default todoApp

