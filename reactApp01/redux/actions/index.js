let nextTodoId = 0
/*
    在JavaScript ES6中，export与export default均可用于导出常量、函数、文件、模块等，
    你可以在其它文件或模块中通过import+（常量 | 函数 | 文件 | 模块）名的方式，将其导入，
    以便能够对其进行使用，但在一个文件或模块中，export、import可以有多个，export default仅有一个。
 */
export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}