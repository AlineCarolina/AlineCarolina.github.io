import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AboutMe, ProjectsPage , SkillsPage} from '../pages/index';

class Routes extends Component {
  render() {
    return (
      <Switch>
        
        <Route exact path="/">
          <AboutMe />
        </Route>

        <Route exact path="/skills">
          <SkillsPage />
        </Route>

        <Route path="/projects">
          <ProjectsPage />
        </Route>

      </Switch>
    );
  }
}

export default Routes;