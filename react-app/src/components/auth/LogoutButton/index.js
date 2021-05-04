import React from "react";
import { logout } from "../../../store/session";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = async (e) => {
    await dispatch(logout());
    await history.push("/login");
    window.location.reload(false);
  };

  return <div onClick={onLogout}>Logout</div>;
};

export default LogoutButton;
