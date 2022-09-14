import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AboutMe, ContactPage, ProjectsPage , SkillsPage} from '../pages/index';
import Nav from './Nav';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        
        <Route exact path="/">
          <AboutMe />
        </Route>

        <Route exact path="/nav">
          <Nav />
        </Route>

        <Route exact path="/skills">
          <SkillsPage />
        </Route>

        <Route path="/projects">
          <ProjectsPage />
        </Route>

        <Route path="/contact">
          <ContactPage />
        </Route>

      </Switch>
    );
  }
}

export default Routes;