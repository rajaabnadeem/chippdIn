import React, { useState, useEffect, useSelector } from "react";
import { Redirect, useHistory, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../../store/session";
import logo from "../../../images/logo3.png";
import "./SignUpForm.css";

const SignUpForm = ({ authenticated, setAuthenticated, setPath }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [showSignup, setShowSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function passwordToggle() {
    setShowPassword(!showPassword);
  }

  const onSignUp = async (e) => {
    e.preventDefault();

    const user = await dispatch(
      sessionActions.signUp({ first_name, last_name, email, password })
    );
    if (!user.payload.errors) {
      setAuthenticated(true);
      history.push("/dashboard");
    } else {
      setErrors(user.payload.errors);
    }
  };

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="signup-container">
      <div className="signup-image-container">
        <img alt="signupimg" className="signup-image" src={logo}></img>
      </div>
      <div className="signup-form-container">
        <div className="signup-title-container">
          <div className="real-signup-title">INTRODUCE YOURSELF</div>
        </div>
        <form onSubmit={onSignUp}>
          <div className="signup-errors-container">
            <ul className="signup-errors-list">
              {errors && errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
          </div>
          <div className="firstname-input-container">
            <div className="signup-title">Hi there! My name is</div>
            <input
              className="firstname-input"
              type="text"
              name="first_name"
              onChange={updateFirstName}
              value={first_name}
              placeholder="firstname"
              onClick={() => setShowSignup(true)}
              onKeyDown={() => setShowSignup(true)}
            ></input>
          </div>

          {showSignup && (
            <div className="trans-div">
              <div className="lastname-input-container">
                <input
                  className="lastname-input"
                  type="text"
                  name="last_name"
                  onChange={updateLastName}
                  value={last_name}
                  placeholder="lastname"
                ></input>
              </div>
              <div className="s-email-input-container">
                <div className="signup-title-b">Here's my email address:</div>
                <input
                  className="s-email-input"
                  type="text"
                  name="email"
                  onChange={updateEmail}
                  value={email}
                ></input>
              </div>
              <div className="s-password-input-container">
                <div className="signup-title-b">And here's my password:</div>
                <input
                  className="s-password-input"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={updatePassword}
                  value={password}
                ></input>
              </div>
              <div className="show-password" onClick={passwordToggle}>
                show password
              </div>
            </div>
          )}
          <div className="signup-button-container">
            <button className="signup-button" type="submit">
              Sign me up!
            </button>
          </div>
          <div className="already-member-container">
            <div className="already-member">
              {"Already have an account?  "}
              <NavLink className="signup-navlink" to="/login">
                Click here
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
