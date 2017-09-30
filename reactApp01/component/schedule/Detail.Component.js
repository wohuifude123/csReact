import React from 'react';

class Detail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() { //使用JSX返回节点
        return (
            <div>
                详述 == {this.props.seconds}
            </div>
        );
    }
}

export default Detail;



