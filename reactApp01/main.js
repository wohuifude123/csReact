import React from 'react';

import ReactDOM from 'react-dom';

//import App from './App.jsx';
// js 组件

import GetGreeting from './component/js/GetGreeting.js';
//import App from './component/js/App.js';
//import FormatNameUse from './component/js/FormatName.js';
import MyComponent01 from './component/js/MyComponent01.js';
import LikeButton from './component/js/LikeButton.js';
import BasicExample from './react-router/js/BasicExample.js';
// import AppRouter from './react-router/js/reactRouter01.js';
// 路由
import RouterApp from './react-router/js/router02.js';

// jsx 组件
import Apa from './component/jsx/Apa.jsx';
import ImgShow from './component/jsx/ImgShow.jsx';
import Clock from './component/jsx/Ba.jsx';
import ClockB from './component/jsx/ClockB.jsx';
import ClockTimeout from './component/jsx/ClockTime.jsx';
import StaffHeader from './component/jsx/StaffHeader.jsx';

// jsx 复杂的组件
import AppFormatName from './component/jsx/AppFormatName.jsx';

// redux 部分
import renderCounter from './redux/renderCounter.jsx';




//ReactDOM.render(<App name="John"/>,document.getElementById('app'))
//ReactDOM.render(<FormatNameUse name="John"/>, document.getElementById('app01'))

ReactDOM.render(<AppFormatName />,document.getElementById('app'))
ReactDOM.render(
    <div>
        <MyComponent01 name="张三" />
        <hr/>
        <MyComponent01 name="李四" />
    </div>,
    document.getElementById('app01')
);
ReactDOM.render(
    <LikeButton />,
    document.getElementById('LikeButton01')
);

ReactDOM.render(<renderCounter />,
    document.getElementById('app012')
)


ReactDOM.render(<GetGreeting />,
    document.getElementById('app02'))
// This demo uses a HashRouter instead of BrowserRouter
// because there is no server to match URLs
ReactDOM.render((
    <BasicExample />
), document.getElementById('bppRouter03'))
/*
ReactDOM.render((
    <AppRouter />
), document.getElementById('appRouter03'))
*/
ReactDOM.render(<Apa />,
    document.getElementById('app03'))
ReactDOM.render(<ImgShow />,
    document.getElementById('app04'))
//ReactDOM.render(<Clock />, document.getElementById('app05'))
ReactDOM.render(<ClockB />,
    document.getElementById('app06'))
ReactDOM.render(<ClockTimeout />,
    document.getElementById('app07'))
ReactDOM.render(<RouterApp />,
    document.getElementById('appRouter'))
ReactDOM.render(<StaffHeader />,
    document.getElementById('app08'))
