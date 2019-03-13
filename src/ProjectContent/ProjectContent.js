import React, { Component } from "react";
import projects from "../data";
import "./ProjectContent.css";
import { Link } from "@reach/router";

class ProjectContent extends Component {
  componentDidMount() {
    document.getElementById("vid").play();
  }
  render() {
    console.log(this.props.projectId);
    const data = projects[this.props.projectId];
    const {
      projectName,
      projectUrl,
      gitHubUrl,
      videoUrl,
      idea,
      goal,
      features,
      tools
    } = data;

    return (
      <div className="modal">
        <div className={`project-container ${this.props.projectId}`}>
          <div className="project-content">
            <h2 className="project-name">{projectName}</h2>
            <div className="video-shadow">
              <video id="vid" autoplay>
                <source src={videoUrl} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="column">
            <Link className="close-btn" to="/">
              ×
            </Link>
            <ul>
              <li>
                Idea <div className="span">{idea}</div>
              </li>
              <li>
                Goal <div className="span">{goal}</div>
              </li>
              <li>
                Features <div className="span">{features}</div>
              </li>
              <li>
                Tools<div className="span">{tools}</div>
              </li>
            </ul>
            <div className="btns">
              <a className="visit-btn" href={projectUrl}>
                Visit Website
              </a>
              <a className="git-btn" href={gitHubUrl}>
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectContent;
