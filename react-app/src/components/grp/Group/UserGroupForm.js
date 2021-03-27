import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {createUserGroup} from "../../../store/groups"

const UserGroupForm = ({group}) => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(createUserGroup(
            group.id,
            email
          )
        );
    };


    return(<form onSubmit={handleSubmit}>
        <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <button>Add user by email</button>
    </form>)
}

export default UserGroupForm