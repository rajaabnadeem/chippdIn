import React from 'react';
import './Footer.css';
import { useState, useEffect } from 'react';
import NewGroup from '../grp/NewGroup';

const Footer = ({ path }) => {
    return (
<<<<<<< HEAD
        <div
            className={
                path === '/login' || path === '/signup'
                    ? 'footer-login'
                    : 'footer-dash'
            }
        >
            <div className="leftFooter">
                <p className="line1">
                    Made with{' '}
                    <span>
                        <i className="fas fa-heart"></i>

                    </span>{' '}
                    from all over the globe...
                </p>
                <p className="line2">
                    This is a clone app of{' '}
                    <a className='splitwise' href="www.splitwise.com">www.splitwise.com</a>
                </p>
            </div>
            <div className="rightFooter">
                <a className="dev linkedin" href="https://www.linkedin.com/in/dorn-holland-0a22b6173">
                        <div className = 'name'>Dorn</div>
                        <div className = 'links'>
                        <i className="fab fa-linkedin-in linkedicon"></i>
                        </div>
                </a>
                <div className='pipe'></div>
                <a className="dev linkedin" href="https://www.linkedin.com/in/james-aikens-8b051597/">
                        <div className = 'name'>James</div>
                        <div className = 'links'>
                        <i className="fab fa-linkedin-in linkedicon"></i>
                        </div>
                </a>
                <div className='pipe'></div>
                <a className="dev linkedin" href="https://www.linkedin.com/in/mohammed-rajaab-nadeem-23090b132/">
                        <div className = 'name'>Rajaab</div>
                        <div className = 'links'>
                        <i className="fab fa-linkedin-in linkedicon"></i>
                        </div>
                </a>
                <div className='pipe'></div>
                <a className="dev linkedin" href="https://www.linkedin.com/in/stephen1010/">
                        <div className = 'name'>Stephen</div>
                        <div className = 'links'>
                            <i className="fab fa-linkedin-in linkedicon"></i>
                        </div>
                </a>
=======
        <div className="footer">
            <p className="line1">
                Made with{' '}
                <span>
                    <i class="fas fa-heart"></i>
                </span>{' '}
                from all over the globe...
            </p>
            <p className="line2">
                This is a Clone app of{' '}
                <a href="https://www.splitwise.com">www.splitwise.com</a>
            </p>
            <div className="devContainer">
                <div className="dev">
                    <p>Dorn Holland</p>
                    <a href="https://www.linkedin.com/in/dorn-holland-0a22b6173">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
                <div className="dev">
                    <p>James Aikens</p>
                    <a href="https://www.linkedin.com/in/james-aikens-8b051597/">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
                <div className="dev">
                    <p>Rajaab Nadeem</p>
                    <a href="https://www.linkedin.com/in/mohammed-rajaab-nadeem-23090b132/">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
                <div className="dev">
                    <p>Stephen Szelpal</p>
                    <a href="https://www.linkedin.com/in/stephen1010/">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
>>>>>>> main
            </div>
        </div>
    );
};

export default Footer;
