import React from 'react'


const Comment = ({comment, first_name, last_name}) => {
    return (
        <div>
            <h2>Posted by {first_name} {last_name}</h2>
            <h1>{comment}</h1>
        </div>
        // <h1>Comment Goes Here</h1>
    )
}


export default Comment
