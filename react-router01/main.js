import React from 'react';

import ReactDOM from 'react-dom';

import BasicExample from './src/App.Router.js';
import SidebarExample from './src/Sidebar.Router.js';


ReactDOM.render(<BasicExample />,
    document.getElementById('BasicExample'))
ReactDOM.render(<SidebarExample />,
    document.getElementById('SidebarExample'))

