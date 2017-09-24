import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

class reduxIndex extends React.Component {
    constructor() {
        super();
    }
    render() {
        let store = createStore(todoApp)
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}


export default reduxIndex