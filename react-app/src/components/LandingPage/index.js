import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import logo from '../../images/logo3.png';
import airplane from '../../images/airplane.jpg';
import house from '../../images/house.jpg';
import heart from '../../images/heart.jpg';
import asterisk from '../../images/asterisk.jpg';
import bigHouse from '../../images/bigHouse.jpg';
import expensesEasily from '../../images/expensesEasily.jpg';
import payFriends from '../../images/payFriends.jpg';

const LandingPage = () => {
    return (
        <div className="landingPage">
            <div className="landingContainerTop">
                <div className="landingTopLeft">
                    <div className="landingTitleC">
                        <p>Less stress when</p>
                        <p>sharing expenses</p>
                    </div>
                    <div className="landingTextCarouselC">
                        <p>with housemates.</p>
                    </div>
                    <div className="landingIconsC">
                        <div>
                            <img className="landingIcon" src={airplane}></img>
                        </div>
                        <div>
                            <img className="landingIcon" src={bigHouse}></img>
                        </div>
                        <div>
                            <img className="landingIcon" src={heart}></img>
                        </div>
                        <div>
                            <img className="landingIcon" src={asterisk}></img>
                        </div>
                    </div>
                    <div className="landingExplanationC">
                        <p>Keep track of your shared expenses and</p>
                        <p>balances with housemates, trips, groups,</p>
                        <p>friends, and family.</p>
                    </div>
                    <div className="landingSignupButtonC">
                        <button className="landingSignupButton">Sign up</button>
                    </div>
                </div>
                <div className="landingTopRight">
                    <div className="imageCarouselC">
                        <img className="landingImg" src={bigHouse}></img>
                    </div>
                </div>
            </div>
            <div className="landingContainerMid">
                <div className="landingContainerMidLeft">
                    <div className="featuresTitle">Add expenses easily</div>
                    <div className="featuresExplanation">
                        <p>Quickly add expenses on the go before</p>
                        <p>you forget who paid</p>
                    </div>
                    <div className="featuresImage">
                        <img
                            className="expensesImage"
                            src={expensesEasily}
                        ></img>
                    </div>
                </div>
                <div className="landingContainerMidRight">
                    <div className="featuresTitle">Pay friends back</div>
                    <div className="featuresExplanation">
                        <p>Settle up with a friend and record any</p>
                        <p>cash or online payment.</p>
                    </div>
                    <div className="featuresImage">
                        <img className="expensesImage" src={payFriends}></img>
                    </div>
                </div>
            </div>
            <div className="landingContainerBottom"></div>
        </div>
    );
};

export default LandingPage;
