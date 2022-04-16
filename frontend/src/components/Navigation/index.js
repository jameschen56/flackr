import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <nav className="navbar-login-signup">
        <NavLink to="/login"><button id="login-btn">Log In</button></NavLink>
        <NavLink id="signup-btn" to="/signup"><button id="signup-btn">Sign Up</button></NavLink>
      </nav>
    );
  }

  return (
    <header className="nav-bar">
      <span className="left-nav-bar">
        <NavLink id="home-logo" exact to="/" style={{ textDecoration: "none" }}>
          <span className="dot" id="blueDot"></span>
          <span className="dot" id="redDot"></span>
          <span className="logo-title">flackr</span>
        </NavLink>
      </span>
      <span className="right-nav-bar">{isLoaded && sessionLinks}</span>
    </header>
  );
}

export default Navigation;
