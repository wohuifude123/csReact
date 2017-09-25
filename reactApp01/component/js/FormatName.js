import React from 'react';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

class FormatNameUse extends React.Component {
    constructor() {
        super();
    }
    render() {
        return React.createElement('h1', null, `小名字 ${formatName(user)+" = "+this.props.name}`);
    }
}


export default FormatNameUse;
