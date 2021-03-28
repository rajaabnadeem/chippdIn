import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'
import LogoutButton  from '../../components/auth/LogoutButton'


function ProfileButton({ user }) {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


  return (
    <>
    <div className = 'dropdown' onMouseLeave={openMenu} onClick={openMenu}>
      <button >
        <i className="fas fa-user-circle" />
      {user.first_name}</button>
      {showMenu && (
        <ul className="profile_dropdown">
            <div>{user.first_name} {user.last_name}</div>
            <div>My Balance: ${user.balance}</div>
            <NavLink to = '/dashboard'>Add a Group</NavLink>
            {/* <NavLink to = '/transactions'>My Transactions</NavLink> */}
            {/* <button onClick={logout}>Log Out</button> */}
            <LogoutButton />
        </ul>
      )}
      </div>
    </>
  );
}

export default ProfileButton;
