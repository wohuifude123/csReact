import React from 'react';

import ReactDOM from 'react-dom';

import LikeButton from './component/LikeButton.jsx';
import WelcomeButton from './component/WelcomeButton.jsx';
import CommentButton from './component/comment/CommentButton.jsx';
import Clock from './component/clock/Clock.component.jsx';

import Toggle from './component/toggle/Toggle.component.jsx';
import Greeting from './component/greeting/Greeting.Component.jsx';

import NumberListSet from './component/NumberList/NumberList.Set.jsx';

import NameForm from './component/NameForm/NameForm.Component.jsx';

import EssayForm from './component/textarea/EssayForm.Component.jsx';

import FlavorForm from './component/textarea/FlavorForm.Component.jsx';

import Reservation from './component/textarea/Reservation.Component.jsx';

import Calculator from './component/calculator/Calculator.Component.jsx';

import ChaseOutput from './component/chase/Chase.Output.jsx';

import SignUpDialog from './component/dialog/Dialog.Component.jsx';

import WholeComponent from './component/whole/Whole.Component.jsx';




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
ReactDOM.render(
    <NumberListSet />,
    document.getElementById('number')
);
ReactDOM.render(
    <NameForm />,
    document.getElementById('NameForm')
);
ReactDOM.render(
    <EssayForm />,
    document.getElementById('EssayForm')
);
ReactDOM.render(
    <FlavorForm />,
    document.getElementById('FlavorForm')
);
ReactDOM.render(
    <Reservation />,
    document.getElementById('Reservation')
);

ReactDOM.render(
    <Calculator />,
    document.getElementById('Calculator')
);

ReactDOM.render(
    <ChaseOutput />,
    document.getElementById('ChaseOutput')
);

ReactDOM.render(
    <SignUpDialog />,
    document.getElementById('SignUpDialog')
);

ReactDOM.render(
    <WholeComponent />,
    document.getElementById('WholeComponent')
);
