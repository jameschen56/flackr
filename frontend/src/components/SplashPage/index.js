import React from 'react';
import InspirationWords from './InspirationWords';

const SplashPage = () => {

    return (
        <div className = "splash-content">
            <div className ="splash-slideshow">
                <div className="splash-inspiration">
                    <InspirationWords />
                    <div className="splash-attribution">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SplashPage;
