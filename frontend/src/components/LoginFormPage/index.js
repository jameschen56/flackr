import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./LoginForm.css";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/images" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const demoLogin = () => (
    <button
      className="demo-btn"
      onClick={(e) => {
        setCredential("demo@user.io");
        setPassword("password");
      }}
    >
      Demo Login
    </button>
  );

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <header>
          <NavLink
            id="home-logo"
            exact
            to="/"
            style={{ textDecoration: "none" }}
          >
            <span className="dot" id="blueDot"></span>
            <span className="dot" id="redDot"></span>
            <span className="logo-title">flackr</span>
          </NavLink>
        </header>
        <h2>Log in to flackr</h2>
        <div className="input-container">
        <label>
          Username or Email
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="login-btn">Log In</button>
        {demoLogin()}
        </div>
      </form>
    </div>
  );
}

export default LoginFormPage;
