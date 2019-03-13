import React, { Component } from "react";
import "./Project.css";

export default class Project extends Component {
  state = {
    degX: "",
    degY: "",
    isHovered: false
  };
  handleMouseMove = event => {
    console.log("handleMouseMove");
    const halfW = event.currentTarget.clientWidth / 2;
    const halfH = event.currentTarget.clientHeight / 2;

    const coorX = halfW - (event.pageX - event.currentTarget.offsetLeft);
    const coorY = halfH - (event.pageY - event.currentTarget.offsetTop);

    this.setState({
      degX: (coorY / halfH) * 10 + "deg",
      degY: (coorX / halfW) * -10 + "deg"
    });
  };
  handleMouseEnter = () => this.setState({ isHovered: true });
  handleMouseOut = () => this.setState({ isHovered: false });

  render() {
    const { className, title, tools } = this.props;
    const { degX, degY, isHovered } = this.state;
    const divStyle = {
      // transform: `translate3d(0, -2px, 0), scale(1.4), rotateX(${degX}), rotateY(${degY})`,
      transform: isHovered
        ? `perspective( 600px ) translate3d(0, -2px, 0) scale(1.1) rotateX(${degX}) rotateY(${degY})`
        : ""
    };
    // console.log("render", divStyle);

    return (
      <div
        style={divStyle}
        className={`project ${className}`}
        onMouseMove={this.handleMouseMove}
        onMouseEnter={this.handleMouseEnter}
        onMouseOut={this.handleMouseOut}
      >
        <div className="project-hover">
          <h3 className="project-title">{title}</h3>
          <p className="project-tools">{tools}</p>
        </div>
      </div>
    );
  }
}
