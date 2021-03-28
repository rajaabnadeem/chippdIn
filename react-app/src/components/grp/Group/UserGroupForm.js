import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUserGroup } from '../../../store/groups';
import './Group.css';

const UserGroupForm = ({ group }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(createUserGroup(group.id, email));
    };

    return (
        <div className="groupForm">
            <div className="gForm">
                <form className="gForm" onSubmit={handleSubmit}>
                    {/* <button type='submit'></button> */}
                    <div>
                        <input
                            className="gFormInput"
                            placeholder="add group members by email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                    </div>
                </form>
            </div>
            <div className="gForm">
                <div className="gFormIcon">
                    <i onClick={handleSubmit} class="fas fa-plus"></i>
                </div>
            </div>
        </div>
    );
};

export default UserGroupForm;
