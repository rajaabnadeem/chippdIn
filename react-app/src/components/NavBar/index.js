import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import logo from '../../images/logo3.png';
import './NavBar.css';

const NavBar = () => {
    const sessionUser = useSelector((state) => state.session.user);
    const errors = useSelector((state) => {
        if (state.session.user) {
            return state.session.user.errors;
        } else {
            return null;
        }
    });

    if (sessionUser && !errors) {
        return (
            <div className="container__navbar">
                <div className="navbar__links">
                    <a className="anchor" href="/">
                        <img alt='logo' src={logo}></img>
                    </a>
                    <div>
                        <ProfileButton user={sessionUser} />
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
                            <img alt='logo' src={logo}></img>
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
