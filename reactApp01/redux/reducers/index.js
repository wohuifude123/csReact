// import命令接受一对大括号，里面指定要从其他模块导入的变量名。
// 大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同
import { combineReducers } from 'redux'
// export default const str = 'hello world'
// import str from 'demo1'
import todos from './todos'
import visibilityFilter from './visibilityFilter'


const todoApp = combineReducers({
    todos,
    visibilityFilter
})

export default todoApp