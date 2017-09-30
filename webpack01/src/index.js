import _ from 'lodash';

import printMe from './print.js';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    import printMe from './print.js';

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());
