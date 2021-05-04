import React from "react";
import { Route, Redirect } from "react-router-dom";

const UnprotectedRoute = (props) => {
  console.log(props.authenticated);
  return (
    <Route {...props}>
      {props.authenticated ? <Redirect to="/dashboard" /> : props.children}
    </Route>
  );
};

export default UnprotectedRoute;
