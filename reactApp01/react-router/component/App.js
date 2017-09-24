import React from 'react'

class App extends React.createClass {
    render() {
        return <div>
            {this.props.children}
        </div>
    }
}

export default App;