import React from 'react';
import Welcome from './Welcome';

class WelcomeButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Welcome name="Sara" />
                <Welcome name="Cahal" />
                <Welcome name="Edite" />
            </div>
        );
    }
}

export default WelcomeButton;
