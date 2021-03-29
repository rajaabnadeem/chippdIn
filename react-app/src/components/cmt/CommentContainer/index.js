import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Comment from '../Comment';
import { getComments, createComment } from '../../../store/comments';
import './CommentContainer.css';
const CommentContainer = ({ expense_id }) => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');

    const comments = useSelector((state) => state.comments);
    const user = useSelector((state) => state.session.user);

    let user_id;
    if (user) {
        user_id = user.id;
    }

    useEffect(() => {
        if (user_id) {
            return dispatch(getComments(expense_id, user_id));
        }
    }, [user, dispatch, expense_id, user_id]);

    const handleSumbit = async (e) => {
        e.preventDefault();
        await dispatch(
            createComment({
                comment,
                user_id,
                expense_id,
            })
        );
    };

    return (
        <div className="comment__container">
            <div className="all__comments">
                {comments.map((comment) => (
                    <Comment
                        comment={comment.comment}
                        first_name={comment.first_name}
                        last_name={comment.last_name}
                    />
                ))}
            </div>
            <div className="form__container">
                <form onSubmit={handleSumbit}>
                    <input
                        className="form"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />

                    <button className="commentButton">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CommentContainer;
