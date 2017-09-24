import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

const Counter = ({ value })=>(
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state;
    }
};

const store = createStore(reducer);


class renderCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
        <Counter
            value={store.getState()}
            onIncrement={() => store.dispatch({type: 'INCREMENT'})}
            onDecrement={() => store.dispatch({type: 'DECREMENT'})}
        />
    }

    componentDidMount() {
        // componentDidMount 组件渲染完成，已经出现在dom文档里
        store.subscribe(render);
    }
}
