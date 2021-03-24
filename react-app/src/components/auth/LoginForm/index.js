import React, { useState } from 'react';
import { Redirect, useHistory, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../../store/session';
import logo from '../../../images/logo2.jpg';
import './LoginForm.css';

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
            setErrors(user.payload.errors);
        }
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className="login-container">
            <div className="login-image-container">
                <img className="login-image" src={logo}></img>
            </div>
            <div className="login-form-container">
                <div className="login-title-container">
                    <div className="login-title">WELCOME TO CHIPPDIN</div>
                </div>
                <form className="login-form" onSubmit={onLogin}>
                    <div className="login-errors-container">
                        <ul className="login-errors-list">
                            {errors &&
                                errors.map((error, idx) => (
                                    <li key={idx}>{error}</li>
                                ))}
                        </ul>
                    </div>
                    <div className="email-label-container">
                        <label className="email-label">Email</label>
                    </div>
                    <div className="email-input">
                        <input
                            name="email"
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={updateEmail}
                        />
                    </div>
                    <div className="password-label-container">
                        <label className="password-label">Password</label>
                    </div>
                    <div className="password-input">
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={updatePassword}
                        />
                        <div className="login-button-container">
                            <button className="login-button" type="submit">
                                Log In
                            </button>
                        </div>
                        <div className="already-memeber-container">
                            <div className="already-member">
                                {"Don't have an account?  "}
                                <NavLink
                                    className="login-navlink"
                                    to="/sign-up"
                                >
                                    Click here
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
