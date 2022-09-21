import React, { Component } from 'react';
import { Footer, Nav, Skills } from '../components/index';

class SkillsPage extends Component {
  render() {
    return (
      <div className="pricipal-div">
        <section className="pricipal-section">
          <Nav />
          <Skills />
          </section>
        <Footer />
      </div>
    );
  }
}

export default SkillsPage;