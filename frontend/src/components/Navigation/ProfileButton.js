import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { useHistory } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import "./Navigation.css";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
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

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/");
  };

  return (
    <>
      <div className="logged-in-user-nav">
        <NavLink className="images-tabs" to="/images">Explore</NavLink>
        <Link to="/images/upload">
          <i className="fas fa-cloud-upload-alt fa-lg" />
        </Link>
        <span className="welcome-user">Welcome {user.username}!</span>
        <button onClick={openMenu} className='user-button'>
          {/* <i className="fas fa-user" /> */}
          <div className="capture-user"></div>
        </button>
        {showMenu && (
          <ul className="profile-dropdown">
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li>
              <button onClick={logout} id="logout-btn">Log Out</button>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default ProfileButton;
