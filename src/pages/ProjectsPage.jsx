import React, { Component } from 'react';
import { Footer, Nav, Projects } from '../components/index';

class ProjectsPage extends Component {
  render() {
    return (
      <div className="pricipal-div">
        <section className="pricipal-section">
          <Nav />
          <Projects />
          </section>
        <Footer />
      </div>
    );
  }
}

export default ProjectsPage;