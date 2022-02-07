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
      <>
        <NavLink id="login-btn" to="/login" >
          Log In
        </NavLink>
        <NavLink id="signup-btn" to="/signup" >
          Sign Up
        </NavLink>
      </>
    );
  }

  return (
    <nav className="nav-bar">
      <span className="left-nav-bar">
        <NavLink id="home-logo" exact to="/" style={{ textDecoration: "none" }}>
          <span className="dot" id="blueDot"></span>
          <span className="dot" id="redDot"></span>
          <span className="logo-title">flackr</span>
        </NavLink>
      </span>
      <span className="right-nav-bar">{isLoaded && sessionLinks}</span>
    </nav>
  );
}

export default Navigation;
