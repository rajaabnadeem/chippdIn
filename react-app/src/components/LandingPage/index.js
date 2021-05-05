import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './LandingPage.css';
import logo from '../../images/logo3.png';
import airplane from '../../images/airplane.jpg';
import house from '../../images/house.jpg';
import heart from '../../images/heart.jpg';
import asterisk from '../../images/bigAsterisk.jpg';
import bigHouse from '../../images/bigHouse.jpg';
import expensesEasily from '../../images/expensesEasily.jpg';
import payFriends from '../../images/payFriends.jpg';
import { authenticate } from '../../store/session';
import { Redirect } from 'react-router';

const LandingPage = () => {
    const user = useSelector((state) => state.session.user);
    const [i, setI] = useState(0);
    const [j, setJ] = useState(0);
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    let imgArr = [airplane, bigHouse, heart, asterisk];

    let buttonClass = ['green', 'purple', 'red', 'grey'];
    let arr = [
        'on trips.',
        'with housemates.',
        'with your partner.',
        'with anyone.',
    ];
    let arrClass = ['plane', 'housemates', 'partner', 'anyone'];

    if (user && !user.errors) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="landingPage">
            <div className="landingContainerTop">
                <div className="landingTopLeft">
                    <div className="landingTitleC">
                        <p>Less stress when</p>
                        <p>sharing expenses</p>
                    </div>

                    <div className="landingTextCarouselC">
                        <p
                            className={arrClass[j]}
                            onLoad={setTimeout(() => {
                                if (i === 3) {
                                    setI(0);
                                } else {
                                    setI(i + 1);
                                }
                                if (j === 3) {
                                    setJ(0);
                                } else {
                                    setJ(j + 1);
                                }
                            }, 4000)}
                        >
                            {arr[i]}
                        </p>
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
                        <button
                            className={`landingSignupButton ${buttonClass[a]}`}
                            onLoad={setTimeout(() => {
                                if (a === 3) {
                                    setA(0);
                                } else {
                                    setA(a + 1);
                                }
                            }, 4000)}
                        >
                            Sign up
                        </button>
                    </div>
                </div>
                <div className="landingTopRight">
                    <div className="imageCarouselC">
                        <img
                            className={`image${b}`}
                            onLoad={setTimeout(() => {
                                if (b === 3) {
                                    setB(0);
                                } else {
                                    setB(b + 1);
                                }
                            }, 4000)}
                            src={imgArr[b]}
                        ></img>
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
