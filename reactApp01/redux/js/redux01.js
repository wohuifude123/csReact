// http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html

import { createStore } from 'redux';
const store = createStore(fn);

store.dispatch({
    type: 'ADD_TODO',
    payload: 'Learn Redux'
});