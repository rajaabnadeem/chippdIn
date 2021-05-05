import React from "react";
import { logout } from "../../../store/session";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./LogoutButton.css";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = async (e) => {
    await dispatch(logout());
    window.location.reload(false);
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
