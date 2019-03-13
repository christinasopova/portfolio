import React, { Component, Fragment } from "react";
import "./style.css";
import Resume from "../Resume/Resume";
import { Router } from "@reach/router";
import Header from "../Header/Header";
import MainComponent from "../MainContainer/MainContainer";
import ProjectContent from "../ProjectContent/ProjectContent";

const AppContainer = ({ children, location }) => (
  <Fragment>
    <Header location={location} />
    {children}
  </Fragment>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <AppContainer path="/">
            <Resume path="/about" />
            <MainComponent path="/">
              <ProjectContent path="/:projectId" />
            </MainComponent>
          </AppContainer>
        </Router>
      </div>
    );
  }
}

export default App;
