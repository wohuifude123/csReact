import React from 'react';
import '../css/style.css';
import fj1 from '../img/fj1.jpg';

// => 是function的简写形式
/*
    function(x, y) {
        x++;
        y--;
        return x + y;
    }
    (x, y) => {x++; y--; return x+y}
 */

/*
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
*/

var formatName = (user) => {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: '我123，',
    lastName: '起价的夫人'
};

const user_new = {
    firstName: '新的我，',
    lastName: '测试的文字'
};

const user_jpg = {
    avaUrl: fj1
}

// const element_jpg = <img src={user_jpg.avaUrl}></img>;

const element_jpg_01 = userGet => (
    <div>
        <div className="hello" style={{backgroundColor:'lime'}}>new——陌生的访客，{formatName(userGet)}!</div>
        <img src={user_jpg.avaUrl}></img>
    </div>
);


function getGreeting(userGet) {
    if (userGet) {
        return element_jpg_01(userGet);
    }
    return <div>Hello, 问一下</div>;
}

//const element = <img src={user.avatarUrl}></img>;
const element_return = (
    <h1>
        Hello, {formatName(user)}!
        {getGreeting(user_new)}
    </h1>
);



class Apa extends React.Component {
    render() {
        return (
            element_return
        );
    }
}
export default Apa;