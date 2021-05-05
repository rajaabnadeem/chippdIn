import React from "react";
import "./Footer.css";
import { useState, useEffect } from "react";
import NewGroup from "../grp/NewGroup";

const Footer = ({ path }) => {
<<<<<<< HEAD
    return (
        <div
            className={
                path === '/login' || path === '/signup'
                    ? 'footer-dash'
                    : 'footer-dash'
            }
=======
  return (
    <div
      className={
        path === "/login" || path === "/" ? "footer-login" : "footer-dash"
      }
    >
      <div className="leftFooter">
        <p className="line1">
          Made with{" "}
          <span>
            <i className="fas fa-heart"></i>
          </span>{" "}
          from all over the globe...
        </p>
        <p className="line2">
          This is a clone app of{" "}
          <a className="splitwise" href="https://www.splitwise.com/">
            www.splitwise.com
          </a>
        </p>
      </div>
      <div className="rightFooter">
        <a
          className="dev linkedin"
          href="https://www.linkedin.com/in/dorn-holland-0a22b6173"
>>>>>>> 75386b3192bce9af7ea4b3e5787716e867761267
        >
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
