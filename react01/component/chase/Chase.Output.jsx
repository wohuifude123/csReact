import React from 'react';

import ChaseInput from './Chase.Component.jsx';

function toCelsius(fahrenheit) {
    return fahrenheit + '●f='+fahrenheit.length;
}

function toFahrenheit(celsius) {
    return celsius + '※c='+celsius.length;
}

function tryConvert(temperature, convert) {
    // let input = temperature;
    const output = convert(temperature);

    return output;
}

class ChaseOutput extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        // 默认是 scale: 'f'
        this.state = {temperature: '', scale: 'f'};
    }
    /*
        {
            temperature: '37',
            scale: 'c'
        }
     */
    handleCelsiusChange(temperature) {
        this.setState({scale: 'f', temperature});
        // 值发生了变化，然后开始继续传值
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 's', temperature});
    }

    /*
        往 onTemperatureChange 属性传入值
     */
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        {/* 因为是 f 所以 celsius = temperature 空 */}
        const celsius = scale === 's' ? tryConvert(temperature, toCelsius)  : temperature;
        const fahrenheit = scale === 'f' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                {
                    /*
                        发生改变后，调用 this.handleCelsiusChange

                        第二次传值后，依然还是 f，chase={fahrenheit} 发生变化
                    */
                }
                <ChaseInput
                    scale="f"
                    chase={celsius}
                    onChaseChange={this.handleCelsiusChange} />

                <ChaseInput
                    scale="s"
                    chase={fahrenheit}
                    onChaseChange={this.handleFahrenheitChange} />
            </div>
        );
    }
}

export default ChaseOutput;
