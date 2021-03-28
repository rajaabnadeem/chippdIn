import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUserGroup } from '../../../store/groups';

const UserGroupForm = ({ group }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(createUserGroup(group.id, email));
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* <button type='submit'></button> */}
            <i onClick={handleSubmit} class="fas fa-plus"></i>
            <input
                placeholder="add group members by email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            ></input>
        </form>
    );
};

export default UserGroupForm;
