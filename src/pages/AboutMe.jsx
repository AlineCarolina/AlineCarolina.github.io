import React from 'react';

import PersonalInfo from '../components/PersonalInfo';

import '../styles/AboutMe.css';

class AboutMe extends React.Component {
  render() {
    return (
      <section id="about-me">
        <PersonalInfo />
      </section>
    );
  }
}

export default AboutMe;