import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'
import LogoutButton from '../auth/LogoutButton';
import ProfileButton from './ProfileButton';
import './NavBar.css'


const NavBar = ({ setAuthenticated }) => {
    const sessionUser = useSelector(state => state.session.user);
    let sessionLinks

    if (sessionUser) {
      sessionLinks = (
        <ProfileButton user={sessionUser} />
      );
    } else {
      sessionLinks = (
        <>
        <NavLink to = '/login'>Log In</NavLink>
        <NavLink to = '/sign-up'>Sign Up</NavLink>
        </>
      )
    }

  return (
    <div className = 'container__navbar'>
        <div className = 'navbar__links'>
            <NavLink exact to="/">Home</NavLink>
            <div className = 'dropdown'>{sessionLinks}</div>
        </div>
     </div>
  );
  }

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
