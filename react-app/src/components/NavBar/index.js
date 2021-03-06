import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NewGroup from '../grp/NewGroup';
import ProfileButton from './ProfileButton';
import DemoUser from '../auth/DemoUser';
import logo from '../../images/logo3.png';
import './NavBar.css';

import Modal from 'react-modal';

import LogoutButton from '../../components/auth/LogoutButton';

const NavBar = () => {
    const dispatch = useDispatch();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const sessionUser = useSelector((state) => state.session.user);
    const errors = useSelector((state) => {
        if (state.session.user) {
            return state.session.user.errors;
        } else {
            return null;
        }
    });

    const style = {
        overlay: {
            textAlign: 'center',
            top: '45px',
            backgroundColor: 'rgba(0,0, 0, 0.8)',
            zIndex: '1000',
        },
    };

    const toggleModal = () => {
        modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true);
    };

    if (sessionUser && !errors) {
        return (
            <div className="navContainer">
                <div className="navLeft">
                    <a className="anchor" href="/">
                        <img alt="logo" src={logo}></img>
                    </a>
                </div>
                <div className="navRight">
                    <div className="addGroup">
                        <Modal
                            className="groupModal"
                            style={style}
                            isOpen={modalIsOpen}
                        >
                            <NewGroup />
                            <button className="xButton" onClick={toggleModal}>
                                x
                            </button>
                        </Modal>
                        <div className="createNew" onClick={toggleModal}>
                            Create New Group
                        </div>
                    </div>
                    <div className="slash">|</div>
                    <div className="logoutButton">
                        <LogoutButton />
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="navContainer">
                <div className="navLeft">
                    <a className="anchor" href="/">
                        <img alt="logo" src={logo}></img>
                    </a>
                </div>
                <div className="navRight">
                    <div className="logins">
                        <NavLink to="/login">Log In</NavLink>
                    </div>
                    <div className="slash">|</div>
                    <div className="signups">
                        <NavLink to="/signup">Sign Up</NavLink>
                    </div>
                </div>
            </div>
        );
    }
};

export default NavBar;
