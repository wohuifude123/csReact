import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

/*
    However, we want these two inputs to be in sync with each other.
    When we update the Celsius input,
    the Fahrenheit input should reflect the converted temperature, and vice versa.

    In React,
    sharing state is accomplished（完成）by moving it up to the closest common ancestor of the components that need it.
    This is called "lifting state up".
    We will remove the local state from the TemperatureInput and move it into the Calculator instead.

    If the Calculator owns the shared state,
    it becomes the "source of truth" for the current temperature in both inputs.
    It can instruct them both to have values that are consistent with each other.
    Since the props of both TemperatureInput components are coming from the same parent Calculator component,
    the two inputs will always be in sync.

    Let's see how this works step by step.

    First, we will replace this.state.temperature with this.props.temperature in the TemperatureInput component.
    For now, let's pretend this.props.temperature already exists,
    although we will need to pass it from the Calculator in the future:
 */

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        //this.state = {temperature: ''};
    }

    handleChange(e) {
        //this.setState({temperature: e.target.value});
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        // const temperature = this.state.temperature;
        // 如果你想随着用户的输入改变，使用 onChange 事件
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                       onChange={this.handleChange} />
            </fieldset>
        );
    }
}


export default TemperatureInput;
