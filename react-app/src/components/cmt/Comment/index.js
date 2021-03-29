import React from 'react';
import './Comment.css';

const Comment = ({ comment, first_name, last_name }) => {
    const lastIn = [];
    last_name.split('').map((el) => {
        if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(el)) {
            lastIn.push(el);
        }
        return lastIn;
    });
    return (
        <div className="comments">
            <div className="comment">{comment}</div>
            <div className="commentAuthor">
                {first_name} {lastIn}
            </div>
        </div>
    );
};

export default Comment;
