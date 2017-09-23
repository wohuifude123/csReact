import React from 'react';

import ReactDOM from 'react-dom';

//import App from './App.jsx';
// js 组件

import GetGreeting from './component/js/GetGreeting.js';
//import App from './component/js/App.js';
//import FormatNameUse from './component/js/FormatName.js';

// jsx 组件
import Apa from './component/jsx/Apa.jsx';
import ImgShow from './component/jsx/ImgShow.jsx';
import Clock from './component/jsx/Ba.jsx';
import ClockB from './component/jsx/ClockB.jsx';
import ClockTimeout from './component/jsx/ClockTime.jsx';
import StaffHeader from './component/jsx/StaffHeader.jsx';

// jsx 复杂的组件
import AppFormatName from './component/jsx/AppFormatName.jsx';


import Router02 from './react-router/js/router02.js';


//ReactDOM.render(<App name="John"/>,document.getElementById('app'))
//ReactDOM.render(<FormatNameUse name="John"/>, document.getElementById('app01'))

ReactDOM.render(<AppFormatName />,document.getElementById('app'))

ReactDOM.render(<GetGreeting />,
    document.getElementById('app02'))
ReactDOM.render(<Apa />,
    document.getElementById('app03'))
ReactDOM.render(<ImgShow />,
    document.getElementById('app04'))
//ReactDOM.render(<Clock />, document.getElementById('app05'))
ReactDOM.render(<ClockB />,
    document.getElementById('app06'))
ReactDOM.render(<ClockTimeout />,
    document.getElementById('app07'))
ReactDOM.render(<Router02 />,
    document.getElementById('appRouter'))
ReactDOM.render(<StaffHeader />,
    document.getElementById('app08'))
