import React, { useState } from 'react';
import { Redirect, useHistory, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Group from '../Group';
import * as groupActions from '../../store/groups'

const NewGroup = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [types, setTypes] = useState('')
    const hand = ['Apartment', 'House', 'Vacation', 'Other']
    // let groupType;
    const user = useSelector(state => state.session.user)


    const submit = async (e) => {
        e.preventDefault()
        await dispatch(groupActions.createGroup({name, types}, user.id))
    }
    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <label>Name</label>
                    <input value = {name}
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label>Type</label>
                    <select
                        onChange={(e) => setTypes(e.target.value)}
                    >
                        {hand.map((type, idx) => {
                            return (
                                <option value={type} key={idx}>{type}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}


export default NewGroup
