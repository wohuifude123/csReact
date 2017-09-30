import React from 'react';


function Whole(props) {
    return <h1>测试下, {props.name}</h1>;
}

class WholeComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Whole name="全球行01" />
                <Whole name="Cacddal" />
                <Whole name="我的加02" />
            </div>
        );
    }
}

export default WholeComponent;
