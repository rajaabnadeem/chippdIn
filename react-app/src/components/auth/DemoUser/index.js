import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../store/session";

const DemoUser = () => {
  const dispatch = useDispatch();
  const handleDemo = () => {
    const demoUser = {
      email: "demo@user.com",
      password: "password",
    };
    dispatch(login(demoUser));

    return;
  };

  return (
    <button className="demoUser" onClick={handleDemo}>
      Demo User
    </button>
  );
};

export default DemoUser;
