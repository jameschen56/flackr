import React from "react";
import { NavLink } from "react-router-dom";
import "./SplashPage.css";

const SplashPage = () => {
  return (
    <div className="splash-container">
      <div className="splash-text-container">
        <div className="splash-words">
          <h1>Find your inspiration.</h1>
          <h2 className="flickr-community">
            Join the Flickr community, home to tense of billions of photos and 2
            million groups.
          </h2>
          <NavLink to="signup">
            <button>Start for free</button>
          </NavLink>
        </div>
      </div>
      <footer className="my-links">
        <div>© 2022 | flackr</div>
        <div>Developed by James Chen</div>
        <a
          href="https://www.linkedin.com/in/james-chen56/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
        <a
          href="https://github.com/jameschen56/flackr"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github fa-lg"></i>
        </a>
      </footer>
    </div>
  );
};

export default SplashPage;
