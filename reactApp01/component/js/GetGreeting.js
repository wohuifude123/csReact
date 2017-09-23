import React from 'react';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'rkO',
    lastName: 'PerZaz'
};

class GetGreeting extends React.Component {
    constructor() {
        super();
    }


        render() {
            return React.createElement('div', null, ` 很大的名字 ${formatName(user)}`);
        }


}



export default GetGreeting;