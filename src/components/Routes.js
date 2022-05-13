import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AboutMe, ContactForm, Projects , SkillsPage} from '../pages/index';

class Routes extends React.Component {
  render() {
    return (
        <Switch>
        <Route exact path="/">
          <AboutMe />
        </Route>

        <Route exact path="/skills">
          <SkillsPage />
        </Route>

        <Route path="/contact">
          <ContactForm />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>

      </Switch>
    );
  }
}

export default Routes;