import React from 'react';
import './Footer.css';

function Footer() {

    return (
        <footer className='splash-page-footer'>
            
            <ul className="foot-stuff">
                <li>React</li>
                <li>Redux</li>
                <li>Javascript</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JSON API</li>
                <li>Git</li>
            </ul>
            
            <ul className='copyright'>
                <li className='footer-text'>
                  James Chen + Flackr 
                </li>
                <ul className='about-me'>
                    <li>
                        <a target="_blank" rel="noreferrer noopener"
                            href='https://github.com/jameschen56/flackr'>
                            <i className='fab fa-github' />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer noopener"
                            href='https://www.linkedin.com/in/james-chen56/'>
                            <i className='fab fa-linkedin' />
                        </a>
                    </li>
                </ul>
            </ul>
        </footer>
    );
}

export default Footer;
