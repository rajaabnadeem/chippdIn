import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as groupActions from '../../../store/groups';

const NewGroup = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [type, setType] = useState('Apartment');
    const types = ['Apartment', 'House', 'Vacation', 'Other'];
    const user = useSelector((state) => state.session.user);

    const submit = async (e) => {
        e.preventDefault();
        await dispatch(groupActions.createGroup({ name, type }, user.id));
    };

    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <input
                        placeholder="group name"
                        name="name"
                        value={name}
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        {types.map((el, idx) => {
                            return (
                                <option value={el} key={idx}>
                                    {el}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <button type="submit">Create New Group</button>
            </form>
        </div>
    );
};

export default NewGroup;
