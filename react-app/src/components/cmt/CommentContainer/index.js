import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Comment from '../Comment'
import { getComments } from '../../../store/comments'

const commentArr = [{'comment': 'I am comment 1', 'first_name': 'Dorn', 'last_name': 'Daddy'}]

const CommentContainer = () => {
    const dispatch = useDispatch()

    const comments = useSelector((state) => state.comments)
    const user = useSelector(state => state.session.user)
    let user_id
    if (user) {
      user_id = user.id
    }

    useEffect(() => {
        return dispatch(getComments(user_id))},
        [])

    return (
        commentArr.map(comment => (
            <Comment comment={comment.comment}
             first_name={comment.first_name}
             last_name={comment.last_name}/>
        ))
    )
}


export default CommentContainer
