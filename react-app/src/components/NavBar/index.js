import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NewGroup from '../grp/NewGroup';
import ProfileButton from './ProfileButton';
import logo from '../../images/logo3.png';
import './NavBar.css';

import Modal from 'react-modal';

import LogoutButton from "../../components/auth/LogoutButton";


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
            top: '35px',
            backgroundColor: 'rgba(0,0, 0, 0.1)',
            zIndex: '1000',
        },
    };

    const toggleModal = () => {
        modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true);
    };

    if (sessionUser && !errors) {
        return (
            <div className="container__navbar">
                <div className="navbar__links">
                    <a className="anchor" href="/">
                        <img alt="logo" src={logo}></img>
                    </a>
                    <div className="profile-button">
                        <ProfileButton user={sessionUser} />
                    </div>
                </div>
                <div className="navbar__left">
                    <div>
                        <Modal
                            className="groupModal"
                            style={style}
                            isOpen={modalIsOpen}
                        >
                            <NewGroup />
                            <button onClick={toggleModal}>x</button>
                        </Modal>
                        <button onClick={toggleModal}>Create New Group</button>
                    </div>
                    <div>
                      <LogoutButton />
                    </div>
                </div>

            </div>
          </div>
        );
    } else {
        return (
            <div className="container__navbar">
                <div className="navbar__links">
                    <div>
                        <a className="anchor" href="/">
                            <img alt="logo" src={logo}></img>
                        </a>
                    </div>
                    <div>
                        <NavLink to="/login">Log In</NavLink>
                    </div>
                    <div>
                        <NavLink to="/sign-up">Sign Up</NavLink>
                    </div>
                </div>
            </div>
        );
    }
};

export default NavBar;

//   return (
//     <nav>
//       <ul>
//         <li>
//           <NavLink to="/" exact={true} activeClassName="active">
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/login" exact={true} activeClassName="active">
//             Login
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/sign-up" exact={true} activeClassName="active">
//             Sign Up
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/users" exact={true} activeClassName="active">
//             Users
//           </NavLink>
//         </li>
//         <li>
//           <LogoutButton setAuthenticated={setAuthenticated} />
//         </li>
//       </ul>
//     </nav>
//   );
// }
