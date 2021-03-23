import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../../store/session';

const SignUpForm = ({ authenticated, setAuthenticated }) => {
    const dispatch = useDispatch();
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignUp = async (e) => {
        e.preventDefault();

        const user = await dispatch(
            sessionActions.signUp({
                first_name,
                last_name,
                email,
                password,
            })
        );
        if (!user.errors) {
            setAuthenticated(true);
            return <Redirect to="/" />;
        }
    };

    if (authenticated) {
        return <Redirect to="/" />;
    }

    const updateFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const updateLastName = (e) => {
        setLastName(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <form onSubmit={onSignUp}>
            {/* <ul>
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul> */}
            <div>
                <label>First Name</label>
                <input
                    type="text"
                    name="first_name"
                    onChange={updateFirstName}
                    value={first_name}
                ></input>
            </div>
            <div>
                <label>Last Name</label>
                <input
                    type="text"
                    name="last_name"
                    onChange={updateLastName}
                    value={last_name}
                ></input>
            </div>
            <div>
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    onChange={updateEmail}
                    value={email}
                ></input>
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={updatePassword}
                    value={password}
                ></input>
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUpForm;
