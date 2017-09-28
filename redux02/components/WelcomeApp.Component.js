import React from 'react'

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

class WelcomeApp  extends Component {
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

export default WelcomeApp;
