import React, { Component } from "react";
import { Link } from "@reach/router";
import prof_pic from "../assets/prof-pic.jpeg";
import "./Header.css";
import linkedIn from "../assets/linkedIn.svg";
import email from "../assets/email.svg";

class Header extends Component {
  render() {
    const isAboutComponent = this.props.location.pathname === "/about";
    return (
      <div
        className={`header-container-dark ${
          !isAboutComponent ? "" : "header-container-light"
        }`}
      >
        <div className="header-wrapper">
          <Link to="/">
            <img className="prof-picture" src={prof_pic} alt="prof-avatar" />
          </Link>

          {!isAboutComponent ? (
            <h1 className="full-name">
              Hello, I'm <br /> <span> Khrystyna Sopova</span>
            </h1>
          ) : (
            <h1 className="full-name">
              <br />
              <span> Khrystyna Sopova</span>
            </h1>
          )}

          {!isAboutComponent ? (
            <Link
              className={`about ${!isAboutComponent ? "" : "about-dark"}`}
              to="about"
            >
              About Me
            </Link>
          ) : (
            <div className="header-about">
              <div className="social-icons">
                <a
                  href="mailto:work.sopova@gmail.com"
                  className="email-container email-container-header "
                >
                  <img className="image" src={email} alt="" />
                </a>

                <a
                  className="link-container"
                  href="https://www.linkedin.com/in/kristinasopova/"
                  alt="linkedInUrl"
                >
                  <img className="image" src={linkedIn} alt="" />
                </a>
              </div>
            </div>
          )}
        </div>
        <div>
          <div
            className={`summary-container-dark ${
              !isAboutComponent ? "" : "summary-container-light"
            }`}
          >
            <h2 className="summary-title">
              Product Manager / <br /> Web Developer
            </h2>
            <p className="p-summary">
              I am a product manager, web developer proficient in JavaScript and
              its modern frameworks with the focus on React and its eco-system.
              I have experience with server-side languages and frameworks such
              as Ruby on Rails, Node.js and Express. I'm experienced in creating
              mobile apps, games, and websites.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
