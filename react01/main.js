import React from 'react';

import ReactDOM from 'react-dom';

import LikeButton from './component/LikeButton.jsx';
import WelcomeButton from './component/WelcomeButton.jsx';
import CommentButton from './component/comment/CommentButton.jsx';
import Clock from './component/clock/Clock.component.jsx';

import Toggle from './component/toggle/Toggle.component.jsx';
import Greeting from './component/greeting/Greeting.Component.jsx';

ReactDOM.render((
    <LikeButton />
), document.getElementById('LikeButton'))

ReactDOM.render((
    <WelcomeButton />
), document.getElementById('WelcomeButton'))

ReactDOM.render((
    <CommentButton />
), document.getElementById('CommentButton'))

ReactDOM.render((
    <Clock />
), document.getElementById('Clock'))
ReactDOM.render((
    <Toggle />
), document.getElementById('Toggle'))
ReactDOM.render(
    // Try changing to isLoggedIn={true}:
    <Greeting />,
    document.getElementById('Greeting')
);
