import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Comment from '../Comment'
import { getComments, createComment } from '../../../store/comments'


const CommentContainer = () => {
    const dispatch = useDispatch()
    const [comment, setComment] = useState('')

    const comments = useSelector(state => state.comments)
    const user = useSelector(state => state.session.user)

    let user_id
    if (user) {
      user_id = user.id
    }

    const expense_id = 2
    useEffect(() => {
        return dispatch(getComments(expense_id))},
        [])

        const handleSumbit = async (e) => {
            e.preventDefault();
            await dispatch(
                createComment({
                    comment,
                    user_id,
                    expense_id
                })
            );
        };



    return (
        <div className = 'comment__container'>
            <div className = 'all__comments'>
            {comments.map(comment => (
                <Comment comment={comment.comment}
                first_name={comment.first_name}
                last_name={comment.last_name}/>
                ))}
        </div>
            <div className = 'form__container'>
                <form onSubmit={handleSumbit}>
                    <input
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required

                    />
                    <button>Submit</button>
                </form>
            </div>
        </div>

    )
}


export default CommentContainer
