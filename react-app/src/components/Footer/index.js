import React from 'react';
import './Footer.css';
import { useState, useEffect } from 'react';
import NewGroup from '../grp/NewGroup';

const Footer = ({ path }) => {
    return (
        <div>
            <div
                className={
                    path === '/login' || path === '/signup'
                        ? 'footer-dash'
                        : 'footer-dash'
                }
            >
                <a>
                    <div className="names">Dorn</div>
                    <div className="links">
                        <i className="fab fa-linkedin-in linkedicon"></i>
                    </div>
                </a>
                <div className="pipe"></div>
                <a
                    className="dev linkedin"
                    href="https://www.linkedin.com/in/james-aikens-8b051597/"
                >
                    <div className="names">James</div>
                    <div className="links">
                        <i className="fab fa-linkedin-in linkedicon"></i>
                    </div>
                </a>
                <div className="pipe"></div>
                <a
                    className="dev linkedin"
                    href="https://www.linkedin.com/in/mohammed-rajaab-nadeem-23090b132/"
                >
                    <div className="names">Rajaab</div>
                    <div className="links">
                        <i className="fab fa-linkedin-in linkedicon"></i>
                    </div>
                </a>
                <div className="pipe"></div>
                <a
                    className="dev linkedin"
                    href="https://www.linkedin.com/in/stephen1010/"
                >
                    <div className="names">Stephen</div>
                    <div className="links">
                        <i className="fab fa-linkedin-in linkedicon"></i>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Footer;
