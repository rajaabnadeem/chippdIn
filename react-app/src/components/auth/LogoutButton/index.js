import React from 'react';
import { logout } from '../../../store/session';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './LogoutButton.css';

const LogoutButton = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const onLogout = async (e) => {
        await dispatch(logout());
        history.push('/');
    };

    return (
        <button className="logoutButton" onClick={onLogout}>
            Logout
        </button>
    );
};

export default LogoutButton;
