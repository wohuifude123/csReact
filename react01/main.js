import React from 'react';

import ReactDOM from 'react-dom';

import LikeButton from './component/LikeButton.jsx';
import WelcomeButton from './component/WelcomeButton.jsx';

ReactDOM.render((
    <LikeButton />
), document.getElementById('LikeButton'))

ReactDOM.render((
    <WelcomeButton />
), document.getElementById('WelcomeButton'))


