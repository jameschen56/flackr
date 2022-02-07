import React from 'react';
import { NavLink } from 'react-router-dom';
import '../SplashPage/InspirationWords.css'

const InspirationWords = () => {

    return (
        <div className="inspiration-words">
            <div className="inspiration-copy">
                <h1>Find your inspiration.</h1>
                <h2>Join the Flackr community, home to tens of billions of photos and 2 million groups.</h2>
                <NavLink to="/signup"><button>Start for free</button></NavLink>
            </div>
        </div>
    )
}

export default InspirationWords;
