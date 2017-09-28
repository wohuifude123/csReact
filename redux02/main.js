import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import todoApp from './reducers'

/*
    import {firstName, lastName, year} from './profile';

    function setName(element) {
        element.textContent = firstName + ' ' + lastName;
    }

    上面代码的import命令，用于加载profile.js文件，并从中输入变量。
    import命令接受一对大括号，里面指定要从其他模块导入的变量名。
    大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同

    foo();

    import { foo } from 'my_module';

    上面的代码不会报错，因为import的执行早于foo的调用。
    这种行为的本质是，import命令是编译阶段执行的，在代码运行之前。

    了export default命令，输入模块时就非常直观了，以输入 lodash 模块为例。

    import _ from 'lodash';
    如果想在一条import语句中，同时输入默认方法和其他接口，可以写成下面这样。
    import _, { each, each as forEach } from 'lodash';
 */

// store 银行的数据
// 任命 todoApp 为银行管理员

let store = createStore(todoApp)

let rootElement = document.getElementById('root')

render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)
