import React from "react";
import "./SplashPage.css"
// import InspirationWords from "./InspirationWords";

const SplashPage = () => {
  return (
    <div className="splash-container">
      <div className="splash-text-container">
        <h2 className="header1">Find your inspiration.</h2>
        <h5 className="slogan">Join the Flackr community, home to tens of billions of photos and 2 million groups.</h5>
      </div>
      <footer className="my-links">
        <div>© 2022 | flackr</div>
        <div>Developed by James Chen</div>
        <div> ---------------------------------</div>
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
