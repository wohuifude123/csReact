import React from 'react';
import UserInfo from './UserInfo.component.jsx';

const formatDate = date => {
    // toLocaleDateString() 方法可根据本地时间把 Date 对象的日期部分转换为字符串，并返回结果
    return date.toLocaleDateString();
}

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className="Comment">
                {/*
                    author: {
                        name: 'Hello Kitty',
                        avatarUrl: 'http://placekitten.com/g/64/64'
                    }
                */}
                <UserInfo user={this.props.author} />
                {/*
                    <div className="UserInfo">
                        <Avatar user={this.props.author} />
                        <div className="UserInfo-name">
                        {this.props.author.name}
                        </div>
                    </div>
                 */}
                <div className="Comment-text">
                    {this.props.text}
                </div>
                <div className="Comment-date">
                    {formatDate(this.props.date)}
                </div>
            </div>
        );
    }

}
export default Comment;

