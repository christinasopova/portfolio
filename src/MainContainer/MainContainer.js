import React, { Component } from "react";
import Project from "../Project/Project";
import "./MainContainer.css";
import Footer from "../Footer/Footer";
import { Link } from "@reach/router";

class MainComponent extends Component {
  render() {
    return (
      <div>
        <div className="main-container">
          <h3 className="title-h3">Latest Projects</h3>
          <section className="portfolio">
            <Link to="/podcast-guru">
              <Project
                className="project-1"
                title="Podcast Guru"
                tools="JS, React, SoundCloud API"
              />
            </Link>
            <Link to="/budget-tracker">
              <Project
                className="project-2"
                title="Budget Tracker"
                tools="JS, React, Redux,Firebase"
              />
            </Link>
            <Link to="/jak-gallery">
              <Project
                className="project-3"
                title="JAK Gallery"
                tools="JS, React, Uploader API, Google API,Express"
              />
            </Link>
          </section>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
export default MainComponent;
