import React from "react";
import Footer from "../Footer"
import { NavLink } from "react-router-dom";

import "./SplashPage.css";

const SplashPage = () => {
  return (
    <>
      <div className="splash-page-content">
        <div className="inspiration-text">
            <h1>Find your inspiration.</h1>

            <h3>Join the Flackr community, home to tens of billions of photos and 2 million groups</h3>

            <NavLink to="/signup"><button>Start for free</button></NavLink>
        </div>
      </div>
      <ul className="slideshow">
                <li><span>Image 01</span></li>
                <li><span>Image 02</span></li>
                <li><span>Image 03</span></li>
                <li><span>Image 04</span></li>
                <li><span>Image 05</span></li>
            </ul>
      <Footer />
    </>
  );
};

export default SplashPage;
