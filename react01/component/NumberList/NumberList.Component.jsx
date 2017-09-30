import React from 'react';

/*
    return (
        // Wrong! There is no need to specify the key here:
        <li key={value.toString()}>
            {value}
        </li>
    );
 */

function ListItem(props) {
    const value = props.value;
    return <li>{props.value}</li>;
}

class NumberList extends React.Component {
    constructor(props) {
        super(props);
        this.numbers_struct = this.props.numbers;
    }
    /*
        <li key={number.toString()}>
            {number}
        </li>
    */
    render(){
        const listItems = this.numbers_struct.map((number) =>
            <ListItem key={number.toString()} value={number} />)
        return (
            <ul>{listItems}</ul>
        );
    }
}

export default NumberList;


