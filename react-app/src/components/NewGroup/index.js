import React, { useState } from 'react';
import { Redirect, useHistory, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Group from '../Group';
import * as groupActions from '../../store/groups';

const NewGroup = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [type, setType] = useState('Apartment');
    const types = ['Apartment', 'House', 'Vacation', 'Other'];
    const user = useSelector((state) => state.session.user);

    const submit = async (e) => {
        e.preventDefault();
        await dispatch(groupActions.createGroup({ name, types }, user.id));
    };
    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <label>Name</label>
                    <input
                        name="name"
                        value={name}
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label>Type</label>
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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default NewGroup;
