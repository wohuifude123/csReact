import React from 'react';

import NumberList from './NumberList.Component.jsx';


class NumberListSet extends React.Component {
    constructor(props) {
        super(props);
        this.numbers = [123, 213, 316, 456, 589];
    }

    render(){
        return (
            <NumberList numbers={this.numbers} />
        );
    }
}

export default NumberListSet;
