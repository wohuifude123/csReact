import React from 'react';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: '我，',
    lastName: '夫人'
};


//const element = <img src={user.avatarUrl}></img>;
const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

class Apa extends React.Component {


    render() {
        return (
            element
        );
    }
}
export default Apa;