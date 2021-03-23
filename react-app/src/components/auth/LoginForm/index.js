import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../../store/session';

const LoginForm = ({ authenticated, setAuthenticated }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    function passwordToggle() {
        setShowPassword(!showPassword);
    }

    const onLogin = async (e) => {
        e.preventDefault();
        const user = await dispatch(sessionActions.login({ email, password }));
        if (!user.payload.errors) {
            setAuthenticated(true);
            history.push('/');
        } else {
            setErrors(user.errors);
        }
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div>
            <form onSubmit={onLogin}>
                <ul>
                    {errors &&
                        errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={updateEmail}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={updatePassword}
                    />
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
