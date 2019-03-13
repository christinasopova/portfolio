import React from "react";
import "./Footer.css";
import linkedIn from "../assets/linkedIn.svg";
import email from "../assets/email.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <a
          className="link-container"
          href="https://www.linkedin.com/in/kristinasopova/"
          alt="linkedInUrl"
        >
          <img className="image" src={linkedIn} alt="" />
        </a>
        <div className="email-container">
          <a href="mailto:work.sopova@gmail.com">
            <img className="image" src={email} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
