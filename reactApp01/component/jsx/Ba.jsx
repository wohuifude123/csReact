import React from 'react';

const element = (
    <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
);

function tick() {
    element
}

class Clock extends React.Component {

    //setInterval(tick, 1000);
    render() {
        return (
            element
        );
    }
}
export default Clock;


