import React from 'react';
import App from '../js/App.js';
import FormatNameUse from '../js/FormatName.js';


const element = (
    <div>
        <h2>新的DIV123开始了</h2>
        <App name="John12"/>
        <FormatNameUse name="John567"/>
    </div>
)


class AppFormatName extends React.Component {
    constructor() {
        super();
    }
    render() {
        return element;
    }
}


export default AppFormatName;