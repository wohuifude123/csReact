import React from 'react';

const chaseNames = {
    f: '第一个',
    s: 'second'
};

class ChaseInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChaseChange(e.target.value);
        // 连接变化的值
    }

    render() {

        const chase = this.props.chase;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>追捕哪个好： {chaseNames[scale]}</legend>
                <input value={chase}
                       onChange={this.handleChange} />
            </fieldset>
        );
    }
}


export default ChaseInput;
