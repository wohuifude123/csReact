import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
/*
const Counter = ({ value })=>(
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);
*/

const Counter = (value, onIncrement, onDecrement) => {
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    );
};

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state;
    }
};

const store = createStore(reducer);

// JSX中使用组件得大写，不用大写的话，会认为是内置组件，就跟div这种标签一样，自然不会当React组件解析
class RenderCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
        //return Counter(store.getState(), () => store.dispatch({ type: 'INCREMENT' }), () => store.dispatch({ type: 'DECREMENT' }));
        return Counter(this.state.count, () => store.dispatch({ type: 'INCREMENT' }), () => store.dispatch({ type: 'DECREMENT' }));



        /*
            <Counter
                value={store.getState()}
                onIncrement={() => store.dispatch({type: 'INCREMENT'})}
                onDecrement={() => store.dispatch({type: 'DECREMENT'})}
            />
        */
    }

    componentDidMount() {
        // componentDidMount 组件渲染完成，已经出现在dom文档里

        // store.subscribe(this.render);

        store.subscribe(()=>{
            this.setState({
                count:store.getState()
            });
        });
    }
}

export default RenderCounter;
