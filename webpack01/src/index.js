import _ from 'lodash';
//import printMe from './print.js';
import './styles.css';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    var br = document.createElement('br');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = '点击并且检测输出';
    // btn.onclick = printMe; // 这个需要注释掉，否则跟下面的懒加载冲突

    element.appendChild(br);
    element.appendChild(btn);

    // Note that because a network request is involved, some indication
    // of loading would need to be shown in a production-level site/app


    btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
        var printMe = module.default;
        printMe();
    });

    //btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    //    var print = module.default;
    //    print();
    //});

    return element;
}

// document.body.appendChild(component());

let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        // printMe();
        document.body.removeChild(element);
        element = component(); // 重新渲染页面后，component 更新 click 事件处理
        document.body.appendChild(element);
    })
}






