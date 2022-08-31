import React from 'react';
import './App.css';

import { Nav, Routes, Footer } from './components/index';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.renderRoutes = this.renderRoutes.bind(this);
    /* this.renderNavBar = this.renderNavBar.bind(this); */
    /* this.renderFooter = this.renderFooter.bind(this); */
  }

  /* renderNavBar() {
    return (
      <Nav />
    );
  } */

  renderRoutes() {
    return (
      <Routes />
    );
  }

  /* renderFooter() {
    return (
      <Footer />
    );
  } */

  render() {
    return (
      <>
        {/* {this.renderNavBar()} */}
        {this.renderRoutes()}
        {/* {this.renderFooter()} */}
      </>
    );
  }
}

export default App;
