import React from 'react';
import Comment from './Comment.component.jsx';

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};

/*
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
 */

class CommentButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <Comment
                date={comment.date}
                text={comment.text}
                author={comment.author} />
        );
    }

}

export default CommentButton;
